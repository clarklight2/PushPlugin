var PushNotification = function() {
};


// Call this to register for push notifications. Content of [options] depends on whether we are working with APNS (iOS) or GCM (Android)
PushNotification.prototype.register = function(successCallback, errorCallback, options) {
    if (errorCallback == null) { errorCallback = function() {}}

    if (typeof errorCallback != "function")  {
        console.log("PushNotification.register failure: failure parameter not a function");
        return
    }

    if (typeof successCallback != "function") {
        console.log("PushNotification.register failure: success callback parameter must be a function");
        return
    }

    cordova.exec(successCallback, errorCallback, "PushPlugin", "register", [options]);
};

// Call this to unregister for push notifications
PushNotification.prototype.unregister = function(successCallback, errorCallback, options) {
    if (errorCallback == null) { errorCallback = function() {}}

    if (typeof errorCallback != "function")  {
        console.log("PushNotification.unregister failure: failure parameter not a function");
        return
    }

    if (typeof successCallback != "function") {
        console.log("PushNotification.unregister failure: success callback parameter must be a function");
        return
    }

     cordova.exec(successCallback, errorCallback, "PushPlugin", "unregister", [options]);
};

    // Call this if you want to show toast notification on WP8
    PushNotification.prototype.showToastNotification = function (successCallback, errorCallback, options) {
        if (errorCallback == null) { errorCallback = function () { } }

        if (typeof errorCallback != "function") {
            console.log("PushNotification.register failure: failure parameter not a function");
            return
        }

        cordova.exec(successCallback, errorCallback, "PushPlugin", "showToastNotification", [options]);
    }
// Call this to set the application icon badge
PushNotification.prototype.setApplicationIconBadgeNumber = function(successCallback, errorCallback, badge) {
    if (errorCallback == null) { errorCallback = function() {}}

    if (typeof errorCallback != "function")  {
        console.log("PushNotification.setApplicationIconBadgeNumber failure: failure parameter not a function");
        return
    }

    if (typeof successCallback != "function") {
        console.log("PushNotification.setApplicationIconBadgeNumber failure: success callback parameter must be a function");
        return
    }

    cordova.exec(successCallback, errorCallback, "PushPlugin", "setApplicationIconBadgeNumber", [{badge: badge}]);
};

  
      
PushNotification.prototype.setAutoMessageCount = function(count) {
    cordova.exec(null, null, "PushPlugin", "setAutoMessageCount", [count]);
};

// https://github.com/phonegap-build/PushPlugin/issues/288#issuecomment-72121589
//Try to change the function's name below to didCompleteBackgroundProcess
PushNotification.prototype.backgroundDone = function(successCallback, errorCallback) {
    if (errorCallback == null) { errorCallback = function() {
        // Try to add in the Javascript function here!!!!
        alert("errorsync1");
          console.log("PushNotification.backgroundDone failure: success callback parameter must be a function");
         // iossync();
    }}

    if (typeof successCallback != "function") {
          //iossync();
          alert("success sync");
        console.log("PushNotification.backgroundDone failure: success callback parameter must be a function");
        return
    }
alert("success sync3");
    cordova.exec(successCallback, errorCallback, "PushPlugin", "didCompleteBackgroundProcess", []);
}

//-------------------------------------------------------------------

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.pushNotification) {
    window.plugins.pushNotification = new PushNotification();
}

if (typeof module != 'undefined' && module.exports) {
  module.exports = PushNotification;
}
