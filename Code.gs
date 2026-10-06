function generateImageLinksCSV() {
  var folderId = '1Tq9yEQVGhGaxkKWOlVsTGcmsEgrCI7KW'; // Source folder ID
  var folderName = 'Image Share Links'; // Target folder name for CSV file

  var folder = DriveApp.getFolderById(folderId);
  var targetFolder = getOrCreateFolder(folderName); // Get or create the target folder

  // **Step 1: Delete all existing files in the target folder**
  deleteAllFilesInFolder(targetFolder);

  var files = folder.getFiles();
  var csvContent = "File Name, Shareable Link\n"; // CSV header

  // Step 2: Loop through all files and generate shareable links
  while (files.hasNext()) {
    var file = files.next();
    var fileName = file.getName();
    var shareableLink = getOrCreateShareableLink(file);

    // Append file data to CSV content
    csvContent += `"${fileName}", "${shareableLink}"\n`;
  }

  // Step 3: Create new CSV file in the target folder
  var csvFile = targetFolder.createFile('image_shareable_links.csv', csvContent, MimeType.CSV);
  Logger.log('CSV file created: ' + csvFile.getUrl());
}

/**
 * Deletes all files in a given folder.
 * @param {GoogleAppsScript.Drive.Folder} folder - The folder whose files will be deleted.
 */
function deleteAllFilesInFolder(folder) {
  var files = folder.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    file.setTrashed(true); // Moves file to trash instead of permanently deleting
  }
}

/**
 * Gets or sets a shareable link for a file.
 * @param {GoogleAppsScript.Drive.File} file - The file object.
 * @return {string} Shareable link of the file.
 */
function getOrCreateShareableLink(file) {
  if (file.getSharingAccess() !== DriveApp.Access.ANYONE_WITH_LINK) {
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  }
  return file.getUrl();
}

/**
 * Retrieves an existing folder by name or creates a new one.
 * @param {string} folderName - The name of the folder.
 * @return {GoogleAppsScript.Drive.Folder} The folder object.
 */
function getOrCreateFolder(folderName) {
  var folders = DriveApp.getFoldersByName(folderName);
  return folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);
}
