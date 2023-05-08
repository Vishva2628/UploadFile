$(document).ready(function() {
  // Capture the form submission event
  $('#uploadForm').submit(function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the file input element
    var fileInput = $('#fileUpload')[0];

    // Check if a file is selected
    if (fileInput.files && fileInput.files[0]) {
      // Access the selected file
      var file = fileInput.files[0];

      // Check the file size (in bytes)
      var fileSize = file.size;
      var maxSize = 2 * 1024 * 1024; // 2 MB (in bytes)

      if (fileSize > maxSize) {
        alert('File size exceeds the maximum limit of 2MB.');
        return false; // Stop further processing and form submission
      }

      // Perform your upload logic here
      // For example, you can use the FileReader API to read the file contents
      var reader = new FileReader();

      reader.onload = function(e) {
        // The file contents are available in e.target.result
        var fileContents = e.target.result;

        // Perform further processing or send the file to the server
        // using an AJAX request, for example
        // $.ajax({
        //   url: 'upload.php',
        //   type: 'POST',
        //   data: fileContents,
        //   success: function(response) {
        //     // Handle the server response
        //   }
        // });

        console.log('File uploaded successfully!');
      }

      // Read the file as text
      reader.readAsText(file);
    }
  });
});
