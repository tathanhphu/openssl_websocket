// JavaScript source code
onBtnClicked = function () {
    switch (this.id)
    {
        case "btnLogin":
            //localStorage.clear();
            name = $('#txtEmail').prop("value");
            p = $('input[id="txtPassword"]').prop("value");
            if (onBtnLoginClicked(window.localStorage, name, p)) {
                //alert('login succeed');
                var json = { "username": name,"password": p };
                window.localStorage["activeUser"] = JSON.stringify(json);
                window.location = "content.html"
            } else {
                alert('login error');
            } 
            break;
        case "btnClose":
			chrome.runtime.sendMessage({action: "close"}, function(response) {
				console.log(response.farewell);
			});
            break;
        case "lnkCreateNew":
            window.location = "createnew.html";
            break;
        case "lnkBack":
            window.history.back();
            break;
        case "btnCreateAccount":
            if (onBtnCreateClicked(window.localStorage)) {
                alert('create new account succeed');
            } else {
                alert('create new account error');
            }
            break;
        case "lnkLogout":
            localStorage.removeItem("activeUser");
            window.location = "background.html";
            break;
        case "lnkForgotPassword":
        default:
            alert('not implement yet');
            break;
    }
    
},
onBtnCreateClicked = function (store) {
    ret = false;
    name = $('#txtEmail').prop("value");
    p = $('input[id="txtPassword"]').prop("value");
    if (name.length != 0 && p.length != 0) {
        if (!store[name]) {
            var json = { password: p };
            store[name] = JSON.stringify(json);
            // reset form
            $('input').each(
                function (index) {
                    this.value = "";
                });
            ret = true;
        }
    }
    return ret;
},
onBtnLoginClicked = function (store, name, p) {
    /*Debug*/
    store.clear();
    store[name] = "{\"password\":\"dao\",\"folders\": [{\"id\": 1,\"order\": 0,\"name\":\"folder 1\",\"parentId\": -1},{\"id\": 2,\"order\": 1,\"name\": \"folder 2\",\"parentId\": 1}],\"items\": [{\"id\": 1,\"order\": 0,\"url\": \"www.vnexpress.net\",\"folderId\": 1,\"name\": \"bao vnexpress\",\"note\": \"Ghi chu\"}]}";
    return true;
    /*
    ret = false;
    value = store[name];
    alert(value);
    if (value) {
        var data = JSON.parse(value);  // Retrieve and decode.
        if (data.password && data.password == p) {
            ret = true;
        }
    }
    return ret;
    //*/
},
onInputLostFocus = function () {
    disable = false;
    $('input').each(
        function (index) {
            if (this.value.length == 0) {
                disable = true;
                return false;
            }
        }
        );
    return disable;
},
onSetting_InputLostFocus = function () {
    disable = onInputLostFocus();
    $('button[id="btnLogin"]').prop("disabled", disable);
},
onCreateNew_InputLostFocus = function () {
    disable = true;
    p1 = $('#txtPassword').prop("value");
    p2 = $('#txtConfirmPassword').prop("value");
    if (p1.length > 0 && p1 == p2) {
        disable = onInputLostFocus();
    }
    $('button[id="btnCreateAccount"]').prop("disabled", disable);
},

createLogoutPanel = function (userName, logoutText, changePasswordText) {
    div = document.createElement('div');
    div.innerHTML = '[' + userName + '] <a id=\"lnkLogout\">' + logoutText +'</a> | <a id=\"lnkChangePassword\">' + changePasswordText+ '</a>';
    div.id = "divLogout";
    div.className = "logout";
    $('#content').append(div);
}



document.addEventListener('DOMContentLoaded', function () {
    //$('#divLogout').addClass("logout");
    activateUser = undefined;
    try {
        activateUser = JSON.parse(localStorage["activeUser"]);
    } catch (e) {
        activateUser = undefined;
    }

    switch (this.body.id) {
        case "setting":
            {
                if (activateUser) {
                    alert('You have loggin with user name: ' + activateUser.username);
                    window.location = "content.html";
                    break;
                }
                $('#btnLogin').prop("disabled", true);
                $('input').keyup(onSetting_InputLostFocus);
            }
            break;
        case "createnew":
            $('#btnCreateAccount').prop("disabled", true);
            $('input').keyup(onCreateNew_InputLostFocus);
            break;
        case "content":
            $("#cboFolder").selectedIndex = -1;
            if (undefined != activateUser) {
                createLogoutPanel(activateUser.username, "Sign out", "Change password");
                jsonObj = JSON.parse(localStorage[activateUser.username]);
                for (i = 0; i < jsonObj.folders.length; i++) {
                    var o = new Option(jsonObj.folders[i].name, jsonObj.folders[i].id);
                    /// jquerify the DOM object 'o' so we can use the html method
                    $(o).html(jsonObj.folders[i].name);
                    $("#cboFolder").append(o);
                }
            }
            break;
    }
    $('button').click(onBtnClicked);
    $('a').click(onBtnClicked);
});



