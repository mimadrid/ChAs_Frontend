import * as React from "react";
import { Form, FormGroup, Input } from "reactstrap";

export class UploadButton extends React.Component<any, {}> {

  public onUpload = () => {
    fetch(this.props.download).then((response) => {
      const json = response.json();
      return json;
    }).then((json) => {
      // Create a hidden 'a' element; click it and remove it
      const blob = new Blob([JSON.stringify(json, null, 2)], { type: "application/json" });
      const hiddenElement = document.createElement("a");
      document.body.appendChild(hiddenElement);
      hiddenElement.href = window.URL.createObjectURL(blob);
      hiddenElement.setAttribute("download", this.props.download.split("/").pop());
      hiddenElement.style.display = "none";
      hiddenElement.click();
      document.body.removeChild(hiddenElement);
    });
  }

  public onFileChange = (event: any) => {
    const features_file = event.target.files[0];
    const form_data = new FormData();

    form_data.append("features", features_file);
    fetch("http://CRCT2107:5000/upload_features", {
      method: "POST",
      body: form_data,
    }).then(
      // Take the json part of the response when the features file is in the server
      (response) => response.json(),
    ).then(
      // Use the json part of the response
      (success) => console.log(success),
    ).catch(
      (error) => console.log(error),
    );
  }

  public render() {
    const margin_style = {
      border: "#aaa",
      borderRadius: "5px",
      borderStyle: "solid",
      borderWidth: "2px",
      fontSize: "small",
    };

    return (
      <div className="text-center">
        <Form>
          <FormGroup style={{ marginBottom: "0px" }}>
            <Input style={margin_style} type="file" onChange={this.onFileChange} name="features" />
          </FormGroup>
        </Form>
      </div>
    );
  }
}
