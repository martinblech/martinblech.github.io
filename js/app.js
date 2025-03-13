(function () {
  // Get the name element and format it
  const nameElement = document.getElementsByClassName("js-MyName")[0];
  const originalName = nameElement.textContent;
  const formattedName = originalName
    .replace(" ", "")
    .replace("í", "i")
    .toLowerCase();

  // Regular expression to match HTML tags
  const htmlTagPattern = /<.*?>/;

  // Get all elements that need the name inserted
  const elementsToUpdate = document.getElementsByClassName("js-InsertMyName");

  // Update each element's text and href
  for (let i = 0; i < elementsToUpdate.length; i++) {
    const element = elementsToUpdate[i];

    // Update text content if it exists
    if (element.textContent) {
      element.textContent = element.textContent.replace(htmlTagPattern, formattedName);
    }

    // Update href if it exists
    if (element.href) {
      element.href = encodeURI(
        decodeURI(element.href).replace(htmlTagPattern, formattedName)
      );
    }
  }
})();
