import React, { Component } from "react";

import { MdDashboard, MdKeyboardArrowDown } from "react-icons/md";

class Dashboard5 extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-row text-xs">
          <div
            className="min-h-screen w-10 text-white fixed relative"
            style={{ backgroundColor: "#2b50ed" }}
          >
            <div className="flex flex-col items-center h-full">
              <div className="absolute top-0 mt-2">Logo</div>
              <div className="absolute " style={{ top: "40%" }}>
                <div>
                  <div
                    className="active flex justify-center rounded p-2 bg-blue-600"
                    style={{ color: "" }}
                  >
                    <MdDashboard className="opacity-100"></MdDashboard>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0">Footer</div>
            </div>
          </div>
          <div
            className="bg-gray-200 w-48 text-black absolute h-full top-0"
            style={{ left: "40px" }}
          >
            <div className="relative h-full overflow-hidden relative">
              <div
                className="h-full overflow-y-auto absolute pl-2 pr-8 py-2"
                style={{ right: "-17px" }}
              >
                <div>
                  <div className="title bg-white text-black rounded flex flex-row justify-around items-center">
                    <span className="left-0">
                      <MdDashboard color="#5d7af2"></MdDashboard>
                    </span>
                    <span className="right-0">
                      <p style={{ color: "#5d7af2 " }}>Dashboard</p>
                    </span>
                    <span>
                      <MdKeyboardArrowDown></MdKeyboardArrowDown>
                    </span>
                  </div>
                  <div className="">
                    Do ut laboris tempor occaecat eu esse quis reprehenderit
                    enim est eiusmod et anim. Ullamco eiusmod incididunt aute
                    elit cupidatat esse quis excepteur qui. Aliqua nostrud
                    aliqua anim cupidatat consequat laborum occaecat excepteur
                    labore adipisicing. Sunt sit esse magna consequat dolore ut
                    magna ut eiusmod. Excepteur ad aute id excepteur eiusmod
                    sint ut commodo. Officia occaecat laborum deserunt cillum
                    nulla ullamco magna qui duis eu cillum voluptate eiusmod
                    elit. Tempor velit exercitation proident do mollit ipsum.
                    Nisi elit esse est tempor. Adipisicing do eiusmod anim
                    cupidatat enim et occaecat tempor minim sint adipisicing.
                    Mollit aliquip est nostrud magna ea est aliqua. Sit Lorem eu
                    ullamco id consequat non et sint ipsum nisi id sunt nulla
                    veniam. Laborum excepteur ipsum in dolore irure do sunt quis
                    incididunt nulla dolore sunt consequat anim. Et non deserunt
                    non dolore aliqua. In culpa aliquip exercitation esse
                    aliqua. Ullamco duis deserunt laborum consequat magna Lorem
                    anim cillum officia qui et est minim quis. Ea aliquip
                    adipisicing consequat ullamco consectetur cillum aliqua. Id
                    nostrud pariatur pariatur incididunt. Consectetur et ullamco
                    magna proident. Do proident est pariatur culpa in officia
                    esse incididunt irure irure ipsum fugiat deserunt enim.
                    Voluptate incididunt quis nostrud esse Lorem aliqua amet
                    excepteur dolore consectetur ut est. Nulla ullamco sint
                    velit adipisicing. Deserunt proident quis laboris laborum
                    officia aliqua do in nostrud minim nisi et non velit. Id
                    minim non ipsum fugiat aute. Dolor velit non pariatur non.
                    Nisi commodo irure et voluptate labore pariatur proident.
                    Velit id officia culpa eiusmod deserunt enim fugiat fugiat
                    ipsum dolore Lorem proident officia. Dolor nulla aliqua
                    aliquip aliqua non eiusmod cillum irure commodo laboris
                    cupidatat duis. Ullamco elit officia velit nulla. Dolor
                    nostrud culpa do sunt eiusmod pariatur Lorem. Quis enim
                    occaecat eu cupidatat ad reprehenderit. Dolor reprehenderit
                    labore dolor labore Lorem qui. In eiusmod non tempor dolor
                    officia cillum enim velit nulla velit do in nostrud est. Non
                    ipsum non ut nisi irure labore sunt tempor voluptate dolore
                    elit fugiat. Anim tempor nulla reprehenderit ipsum ad
                    occaecat adipisicing elit. Reprehenderit ut occaecat et elit
                    culpa pariatur proident incididunt dolor. Eiusmod est enim
                    exercitation incididunt aute minim pariatur consectetur
                    minim deserunt. Ipsum culpa ipsum tempor velit consectetur
                    exercitation exercitation dolor. Duis voluptate voluptate
                    cupidatat et ut veniam. Eiusmod eu eiusmod adipisicing qui
                    voluptate consequat reprehenderit sunt labore esse non
                    occaecat. Tempor veniam velit ut sint labore nostrud tempor
                    elit. Lorem incididunt culpa eu laborum deserunt officia eu
                    mollit nostrud. Est esse dolore amet esse et laborum nulla
                    qui exercitation ullamco ex excepteur laborum. Laboris ex
                    velit tempor ex nostrud incididunt duis qui. Ad cupidatat
                    non incididunt ullamco eu. Est culpa exercitation anim nulla
                    mollit pariatur esse esse sit irure proident est et fugiat.
                    Duis dolor nisi dolore sit sit eu id elit enim minim veniam
                    id. Excepteur esse anim amet non esse. Excepteur veniam
                    irure qui excepteur. Ea quis dolore qui nulla et adipisicing
                    dolore irure proident sunt id aliquip deserunt ad. Esse non
                    ad reprehenderit non ut duis ea occaecat officia
                    reprehenderit Lorem. PAFADP
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-gray-300 w-full text-black absolute h-full top-0"
            style={{ left: "230px" }}
          >
            Contnet
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard5;
