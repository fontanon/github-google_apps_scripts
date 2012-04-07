/*
 * Connector to Redmine from Google Apps Scripts platform.
 *
 * Copyright (c) 2012 Emergya
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * Author: Alejandro Leiva <aleiva@emergya.com>
 *
 */

var GITHUB_API_URL = 'https://api.github.com';

// TODO: this should be obtained from a configuration dialog.
var API_ACCESS_KEY = 'YOUR_API_ACCESS_KEY_HERE!';

var GitHub = (function() {

  function GitHub() {
  }
  
  GitHub.prototype.getCommits = function (user, project) {
    // TODO: Sanity check!
    
    var uri = GITHUB_API_URL + '/repos/' + user + '/' + project + '/commits';
    
    var response = UrlFetchApp.fetch(uri);
    
    var object = Utilities.jsonParse(response.getContentText());
    
    Logger.log(response.getContentText());
    Logger.log(object[0].commit.message);
    
    return object;
  };

  return GitHub;

})();

function stub() {
  gh = new GitHub();
  gh.getCommits('gloob', 'github-google_apps_scripts');
}
