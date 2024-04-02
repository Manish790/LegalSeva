import React, { Component } from "react";
import "./doc.css";
import v10 from '../../Images/v10.jpg'
class Doc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documentContent: "", // State to store the document content
    };
  }

  // Handle changes in the document content textarea
  handleContentChange = (e) => {
    this.setState({ documentContent: e.target.value });
  };

  // Function to save the document as a file
  saveDocument = () => {
    // Create a Blob containing the document content
    const blob = new Blob([this.state.documentContent], { type: "text/plain" });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a temporary <a> element to trigger the download
    const a = document.createElement("a");
    a.href = url;
    a.download = "document.txt"; // Specify the desired file name
    document.body.appendChild(a);

    // Trigger the download
    a.click();

    // Clean up
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  render() {
      return (
        <div className="doc-wrapper">
          <div className="document-writer">
            <h2>Document Writer</h2>
            <textarea
              className="document-textarea"
              value={this.state.documentContent}
              onChange={this.handleContentChange}
              placeholder="Write your document here..."
            />
            <button className="save-button" onClick={this.saveDocument}>
              Save Document
            </button>
              </div>
             
                  <img src={v10} alt="" />
              
        </div>
      );
  }
}

export default Doc;
