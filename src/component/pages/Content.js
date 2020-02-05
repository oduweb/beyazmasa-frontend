import React, { Component } from "react";
import Modal from "../ui/Modal";

export default class Content extends Component {
  render() {
    return (
      <div className="shadow-lg bg-gray-100 h-full text-xs  p-3">
        <div className="bg-gray-300 h-full p-3 rounded">
          Mollit tempor laboris ipsum do officia. Enim velit non occaecat elit
          minim. In aliquip sunt laborum anim dolor labore ullamco mollit labore
          quis consequat. Quis proident est dolor Lorem aute irure enim nisi
          ullamco ad. Sint velit irure velit non incididunt ullamco. Minim
          consectetur nostrud dolore elit cupidatat deserunt consectetur mollit
          ipsum cillum magna magna proident. Nisi elit nostrud aute aliqua.
          Consectetur sit esse ex minim sunt esse est aute. Sunt nisi deserunt
          incididunt aute officia dolor fugiat esse adipisicing mollit ipsum
          qui.
          <Modal
            durum={true}
            MessageType="Error"
            Title="Error"
            ContentMessage="blablabla"
          ></Modal>
        </div>
      </div>
    );
  }
}
