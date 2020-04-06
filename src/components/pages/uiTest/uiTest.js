import React, { Component } from "react";

import Grid from "~/ui/grid";
import ContentTitle from "~/ui/contentTitle";
import DefaultButton from "~/ui/defaultButton";

class uiTest extends Component {
  test = () => {
    alert("sds");
  };

  render() {
    return (
      <div className="">
        <div className="pr-2">
          <ContentTitle title="UI - Elements"></ContentTitle>
          <div className="mt-1 bg-white rounded p-2">
            <h6 id="grid1" tabIndex="0" className="text-base outline-none">
              # Grid
            </h6>
            <span className="text-gray-500">
              Izgara düzenindeki sütunları belirtmek için yardımcı element.
            </span>
            <div>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="text-left px-2 py-2">PropTypes</th>
                    <th className="text-left px-2 py-2">Default</th>
                    <th className="text-left px-2 py-2">Type</th>
                    <th className="text-left px-2 py-2">Comment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-2 py-2">!cols</td>
                    <td className="border px-2 py-2">1</td>
                    <td className="border px-2 py-2">String</td>
                    <td className="border px-2 py-2">
                      Grid'inizdeki kolon sayısını belirte bilirsiniz.
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-2">gap</td>
                    <td className="border px-2 py-2">0</td>
                    <td className="border px-2 py-2">String</td>
                    <td className="border px-2 py-2">
                      Grid'inizdeki kolonların aralarında boşluk belirleye
                      bilirsiniz.
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-2">customeClass</td>
                    <td className="border px-2 py-2">null</td>
                    <td className="border px-2 py-2">String</td>
                    <td className="border px-2 py-2">
                      Tailwind CSS yada Normal CSS yazabilirsiniz.
                    </td>
                  </tr>
                </tbody>
              </table>
              <span className="text-gray-400 italic">
                ! işareti olanlar zorunludur.
              </span>
            </div>
            <div>
              <Grid
                customeClass="mt-2 p-2 border rounded-t text-center"
                cols={"4"}
                gap={"2"}
              >
                <div className="bg-gray-500">1</div>
                <div className="bg-gray-400">2</div>
                <div className="bg-gray-500">3</div>
                <div className="bg-gray-400">4</div>
              </Grid>
              <div className="p-2 bg-gray-800 text-white rounded-b">
                <span style={{ fontSize: "9px" }}>
                  {`import Grid from "~/ui/grid";`}
                  <br></br>
                  <br></br>
                  {`<Grid cols={"4"} gap={"2"}>`}
                  <br></br>
                  {`<div className="bg-gray-500">1</div>`}
                  <br></br>
                  {`...`}
                  <br></br>
                  {`<div className="bg-gray-400">4</div>`}
                  <br></br>
                  {`</Grid>`}
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-1 bg-white rounded p-2">
            <div>
              <DefaultButton></DefaultButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default uiTest;
