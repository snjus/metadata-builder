// api/mockApi.js

export const getPrompt = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Task:
  Given the title block of a technical document in the form of the image, your goal is to extract some metadata from it.

Metadata Specifications:
- revision number: the different variations of revision number keyword are 'Rev.', 'Revision', 'issue number', 'issue' or similar keyword. If it is not mentioned assign an empty string. Just return the revision number without any helper texts like 'issue' or 'rev.', etc.
- drawing number: drawing number or document number or sheet number(only when drawing number or document number not present. It would never be project number
- unit: Usually, the document has an entry of unit/section. If the unit/section is not defined then assign an empty string
- area: Usually, the document has an entry of area. It can be 'Area' or 'Process Area' or 'Subprocess' or similar keyword. If both 'Process Area' and 'Subprocess' present, assign area from 'Process Area'. If not present then assign an empty string
- title: title mentioned in the title section
- document type: it is usually mentioned in the title section of the block in the second or third line after the title. Comprehend the document type from the title section of the block. Document type cannot be a number. Don't make things up. Assign empty string if you cannot extract or comprehend the document type.

Instructions:
Provide your answer as a JSON of metadata attribute mentioned above.
Do not include any additional information, and do not mention strings that do not meet the metadata specifications.`);
      }, 500);
    });
  };
  
  export const uploadFiles = (files) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockResponse = files.map((file, index) => ({
          id: index + 1,
          name: file.name,
          documentType: 'PDF',
          discipline: 'Engineering',
          imageUrl: ['./../img/bracelet.png','./../img/ticket.png'][Math.floor(Math.random() * 2)]
        }));
        resolve(mockResponse);
      }, 1000);
    });
  };
  
  export const downloadResults = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
          resolve("Download successful");
        } else {
          reject(new Error("Download failed"));
        }
      }, 1000);
    });
  };