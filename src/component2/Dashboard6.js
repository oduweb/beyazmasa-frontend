import React, { Component } from "react";
import Tooltip from "react-simple-tooltip";
import {
  TiThLargeOutline,
  TiMediaStop,
  TiThSmallOutline
} from "react-icons/ti";
import { MdKeyboardArrowDown, MdFilterList } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
  FiUsers,
  FiLogOut,
  FiSettings,
  FiPlus,
  FiSearch
} from "react-icons/fi";
import { FaUsersCog } from "react-icons/fa";
import { GoZap } from "react-icons/go";

export default class Dashboard6 extends Component {
  render() {
    return (
      <div className="text-xs font-sans font-light relative">
        {/** Start Mega Modal   */}
        <div className="mega-modal absolute bg-gray-200 h-full w-full left-0 right-0 z-50 overflow-y-auto hidden">
          <div className="flex flex-row justify-between border-b pb-2 sticky">
            <div className="mt-4 ml-2">Modal Title</div>
            <button className="border shadow text-gray-500 h-8 w-8 flex items-center justify-center rounded-full mr-5 mt-2">
              X
            </button>
          </div>
          <div className="absolute h-full ">
            <div className="p-2">
              Qui ut duis id ut id. Ex deserunt do id exercitation labore ad
            </div>
          </div>
        </div>
        {/** End Mega Modal   */}
        {/** Start  Modal   */}
        <div className="modal absolute h-full w-full left-0 right-0 z-50 overflow-y-auto bg-transparent flex justify-center hidden">
          <div className="absolute bg-gray-200 z-50 text-gray-700  w-full sm:w-full md:w-1/2 lg:w-1/2 mt-0 sm:mt-5 md:mt-5 lg:mt-5 shadow rounded">
            <div>
              <div className="flex flex-row justify-between border-b">
                <div className="p-2">Title</div>
                <button className="border shadow text-gray-500 h-5 w-5 flex items-center justify-center rounded-full mr-5 mt-2">
                  X
                </button>
              </div>
              <div className="p-2">
                Mollit Lorem eu mollit ipsum nisi pariatur occaecat nulla do id.
                Aliquip voluptate ea enim voluptate veniam. Duis excepteur
                aliqua laborum nostrud id eu ullamco proident nisi elit qui sit.
                Consequat pariatur qui do est occaecat aliqua laboris in eu
                adipisicing ipsum sunt. Culpa labore cillum esse eiusmod proiden
                aliqua.
              </div>
              <div className="flex flex-row justify-between p-2 border-t text-white">
                <button className="p-1 bg-red-700 rounded">Cancel</button>
                <button className="p-1 bg-green-500 rounded">Submit</button>
              </div>
            </div>
          </div>
        </div>
        {/** End  Modal   */}

        <div className="flex flex-row ">
          {/** Start Side  */}
          <div className="w-8 bg-gray-600 h-full min-h-screen flex-shrink-0">
            <div
              className="absolute top-0 z-50 rounded-r rounded-b h-24 w-40 -ml-40"
              style={{ backgroundColor: "#b7a67c" }}
            >
              <div className="pl-1 pt-2 flex flex-row items-center mb-2">
                <img
                  src={require("../img/oduk.png")}
                  height="24"
                  width="24"
                  alt="logo"
                ></img>
                <div className="text-white pl-2 pt-1">ORDU ÜNİVERSİTESİ</div>
              </div>
              <div className="p-2 border-t">
                <div className=" text-center">Açıklama</div>
              </div>
            </div>
            <div
              className="relative h-full min-h-screen flex justify-center text-white"
              style={{ backgroundColor: "#b7a67c" }}
            >
              <div className="absolute top-0 mt-2 ">
                <img
                  src={require("../img/oduk.png")}
                  height="24"
                  width="24"
                  alt="logo"
                ></img>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Tooltip
                  content="Dashboard"
                  placement={`right`}
                  style={{}}
                  radius={5}
                  padding={4}
                  background={"#a3a7ac"}
                  border={"#a3a7ac"}
                >
                  <div className="bg-gray-100 p-1 rounded opacity-50">
                    <TiThLargeOutline
                      className="bg-transparent"
                      color="indigo"
                    ></TiThLargeOutline>
                  </div>
                </Tooltip>
                <div className="mt-3"></div>
                <div className=" p-1 rounded opacity-100 ">
                  <TiThLargeOutline
                    className="bg-transparent"
                    color=""
                  ></TiThLargeOutline>
                </div>
                <div className="mt-3"></div>
                <div className=" p-1 rounded opacity-100 mb-3">
                  <TiThLargeOutline
                    className="bg-transparent"
                    color=""
                  ></TiThLargeOutline>
                </div>
              </div>
              <div className="absolute bottom-0 mb-2 items-center flex flex-col items-center">
                <div className="p-1 rounded opacity-100 mb-3">
                  <AiOutlineQuestionCircle
                    className="bg-transparent"
                    color=""
                  ></AiOutlineQuestionCircle>
                </div>
                <div>
                  <img
                    src={require("../img/maia.jpg")}
                    className="rounded-full h-6 w-6 object-cover"
                    alt="personel"
                  ></img>
                </div>
                {/** Start User Settings  */}
                <div className="fixed flex justify-center items-center w-32 bg-white h-24 left-0 ml-5 mb-5 bottom-0 rounded p-2 hidden">
                  <div className="">
                    <div className=" flex flex-row text-gray-600 items-center mb-2 hover:text-indigo-500 cursor-pointer">
                      <div>
                        <FaUsersCog></FaUsersCog>
                      </div>
                      <div className="pl-2">User Settings</div>
                    </div>
                    <div className=" flex flex-row text-gray-600 items-center mb-2 hover:text-indigo-500 cursor-pointer">
                      <div>
                        <FiSettings></FiSettings>
                      </div>
                      <div className="pl-2">Settings</div>
                    </div>
                    <div className=" flex flex-row text-gray-600 items-center mb-2 hover:text-indigo-500 cursor-pointer">
                      <div>
                        <FiLogOut></FiLogOut>
                      </div>
                      <div className="pl-2">Çıkış</div>
                    </div>
                  </div>
                </div>
                {/** End User Settings  */}
              </div>
            </div>
          </div>
          {/** End Side  */}
          {/** Start Side Nav  */}
          <div className="bg-gray-300 w-32 flex-shrink-0 overflow-hidden  sm:block hidden">
            <div className="side bg-gray-300 h-full max-h-screen overflow-y-auto overflow-x-hidden">
              <div className="mt-2 pl-2 mb-2">
                {/** Start Side Nav  */}
                <div
                  className="bg-indigo-100 rounded-t pl-2 p-1 flex flex-row justify-between  items-center shadow"
                  style={{ fontSize: "9px" }}
                >
                  <div className="flex flex-row items-center">
                    <TiThLargeOutline></TiThLargeOutline>
                    <div className="pl-2">Dashboard</div>
                  </div>

                  <div>
                    <MdKeyboardArrowDown></MdKeyboardArrowDown>
                  </div>
                </div>
                <div
                  className="bg-gray-200 p-1 pl-2 py-2 rounded-b shadow "
                  style={{ fontSize: "9px" }}
                >
                  <div className="border-l border-indigo-500 border-solid -ml-2 ">
                    <div className="ml-2 flex flex-row items-center ">
                      <div className="flex flex-row items-center">
                        <TiMediaStop color="blue"></TiMediaStop>
                        <div className="pl-2 font-bold">Default</div>
                      </div>
                    </div>
                  </div>
                  <div className="-ml-2 mt-2">
                    <div className="ml-2 flex flex-row items-center ">
                      <div className="flex flex-row items-center">
                        <TiThSmallOutline></TiThSmallOutline>
                        <div className="pl-2">Classic</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/** End  Side Nav */}
                {/** Start Modal Nav Title */}
                <div className="mt-5 mb-2" style={{ fontSize: "9px" }}>
                  <div className="text-gray-500">USERS</div>
                </div>
                {/** End Modal Nav Title */}
                <div style={{ fontSize: "9px" }}>
                  <div className="pl-2 p-1 flex flex-row items-center text-gray-500 font-bold hover:text-indigo-500 cursor-pointer">
                    <div>
                      <FiUsers></FiUsers>
                    </div>
                    <div className="pl-4 ">User</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/** End Side Nav */}
          {/** Start Content  */}
          <div className="bg-gray-300 w-full overflow-hidden">
            <div className="overflow-y-auto max-h-screen overflow-x-hidden">
              <div className="ml-2 p-2 bg-gray-200 rounded-b shadow">
                <div className="flex lg:flex-row sm:flex-col flex-col md:flex-row justify-between items-center">
                  <div>Content Title</div>
                  <div className="mr-2 lg:flex-row sm:flex-col flex-col md:flex-row flex items-center">
                    <div className="relative flex flex-row items-center">
                      <span className="absolute ml-1">
                        <FiSearch></FiSearch>
                      </span>
                      <input
                        type="text"
                        className="rounded mr-2 py-1 px-5 border border-gray-300 focus:border-gray-500"
                        placeholder="Search..."
                      ></input>
                    </div>
                    <div className=" flex flex-row sm:mt-2 lg:mt-0 md:mt-0 mt-2">
                      <div className="bg-gray-500 rounded px-3 py-1 text-white mr-1 flex flex-row items-center cursor-pointer">
                        <span className="mr-1">
                          <MdFilterList></MdFilterList>
                        </span>
                        Filters
                      </div>
                      <div className="bg-gray-500 rounded px-3 py-1 text-white mr-1 flex flex-row items-center cursor-pointer">
                        <span className="mr-1">
                          <GoZap></GoZap>
                        </span>
                        Actions
                      </div>
                      <div className="bg-blue-600 rounded px-3 py-1 text-white mr-1 flex flex-row items-center cursor-pointer">
                        <span className="mr-1">
                          <FiPlus></FiPlus>
                        </span>
                        Create
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" p-2">
                Velit velit ipsum esse consectetur commodo excepteur. Ad culpa
                eu consequat aute nulla adipisicing amet ullamco. Sit minim
                culpa consectetur ex ex deserunt ea qui reprehenderit occaecat
                ad minim enim minim. Sunt culpa pariatur officia ea aliquip
                dolore aliqua mollit elit occaeEa labore est voluptate laboris
                sunt. Reprehenderit sint irure in exercitation velit nulla elit.
                Aliquip laborum sint sunt nisi ullamco sint adipisicing
                voluptate quis elit eu ut do. Adipisicing ipsum minim
                reprehenderit et ipsum nulla consequat cupidatat laborum cillum.
                Sunt sint exercitation deserunt occaecat labore dolore. Laborum
                duis dolore nulla nulla est in velit proident. Minim deserunt
                ullamco in nulla ullamco mollit et anim. In magna non
                reprehenderit mollit mollit culpa est nostrud. Duis elit qui
                fugiat magna laborum ullamco adipisicing. Cillum cupidatat
                officia dolore culpa deserunt quis ad. Ut commodo fugiat
                exercitation fugiat. Nulla ut pariatur qui labore dolore
                cupidatat deserunt ea. Est nostrud irure do fugiat adipisicing
                exercitation ad irure aliquip. Adipisicing ut officia mollit
                aliqua et Lorem sit pariatur. Laborum fugiat anim ut minim
                tempor eu ut veniam sit velit nulla anim nisi cupidatat. Nulla
                duis quis laboris fugiat dolor cupidatat qui. Consectetur amet
                eu amet quis Lorem ullamco labore amet. Minim aliqua ipsum minim
                eiusmod officia labore non elit. Cillum nostrud ullamco sunt
                dolor commodo deserunt tempor eu ea aliquip. Labore veniam elit
                fugiat adipisicing sunt pariatur cillum fugiat. Ullamco mollit
                consectetur in exercitation voluptate. Eiusmod reprehenderit
                reprehenderit labore duis dolor est quis deserunt quis Lorem
                culpa mollit. Aliqua eiusmod esse ullamco enim labore
                adipisicing culpa cupidatat cillum voluptate. Occaecat amet ea
                enim ea enim in qui. Eiusmod magna ut reprehenderit Lorem aute
                nostrud. Eiusmod pariatur in nostrud ullamco incididunt ad minim
                in dolore minim dolore minim nostrud. Consectetur occaecat
                occaecat proident eiusmod aliqua cillum duis ullamco eu sit
                labore dolor officia. Sit dolore irure non quis officia.
                Voluptate labore non in irure. Cillum non ipsum elit elit
                eiusmod irure ut ex incididunt adipisicing. Irure fugiat anim ad
                laboris sit. Qui aliquip reprehenderit quis duis aute sunt
                exercitation ex veniam aliquip non reprehenderit id. Magna aute
                deserunt deserunt incididunt exercitation ad irure. Veniam
                laboris excepteur magna anim eiusmod officia officia minim. In
                cillum non reprehenderit eiusmod labore exercitation laboris
                labore in. Sit commodo ex culpa elit. Nulla adipisicing officia
                sit ipsum voluptate do et deserunt deserunt velit ut sit
                consequat. Anim dolore magna culpa cupidatat culpa tempor
                commodo cupidatat sit ipsum eiusmod nostrud magna. Fugiat sit
                proident ut velit sunt ad eu minim nisi elit excepteur.
                Incididunt exercitation labore ea cupidatat sunt aliqua aliqua.
                Sint ad irure sit laboris est officia do dolore aliquip commodo
                sint ullamco esse aliqua. Mollit quis ullamco dolor ipsum id
                occaecat ex laboris ipsum duis velit Lorem. Nisi irure dolore do
                nostrud. Ullamco dolore cillum incididunt cupidatat fugiat enim.
                Ipsum aliquip ad non amet tempor. Lorem occaecat culpa sint
                irure amet labore amet enim occaecat nisi non. Eu sint cillum
                tempor est sit cupidatat laborum. Deserunt ea fugiat in dolor
                velit Lorem. Ea adipisicing tempor labore enim eiusmod. Elit
                quis culpa dolor enim excepteur magna eu occaecat nostrud ea.
                Voluptate aute nisi laborum ex ad voluptate nulla exercitation
                nulla nulla deserunt. Et quis enim aliqua est sit occaecat
                occaecat ut non quis ad non occaecat. Consectetur do deserunt
                Lorem cillum voluptate do amet laborum deserunt in tempor esse
                voluptate anim.Pariatur commodo dolore nostrud labore labore
                occaecat sit sit. Incididunt nulla non ex enim dolore sint minim
                do. Mollit irure eu tempor et dolore duis aliquip ipsum est.
                Labore labore excepteur sint enim eiusmod. Ipsum officia laboris
                magna nulla esse quis consectetur excepteur sit non nostrud sunt
                et. Magna ad ut ullamco anim irure. Ex ex aliquip sint laborum
                deserunt tempor tempor. Qui eu cillum occaecat pariatur ad
                cillum. Excepteur ullamco pariatur in eu aliqua pariatur
                pariatur eu amet exercitation id magna. Consectetur esse esse
                adipisicing labore duis id officia do. Excepteur velit ex enim
                pariatur amet in proident cupidatat. Est minim commodo anim est
                excepteur ipsum culpa proident incididunt minim voluptate
                exercitation veniam consequat. Proident velit consequat eu
                proident aute reprehenderit ullamco. Cupidatat voluptate non
                culpa sunt dolore nostrud ad veniam minim proident. Laborum
                consectetur id anim sunt sunt pariatur. Laborum occaecat do sit
                culpa sunt ipsum ullamco adipisicing do sunt amet. Nisi deserunt
                dolore id amet deserunt do elit do. Commodo do aute qui ea
                reprehenderit labore voluptate fugiat esse. Nostrud incididunt
                fugiat tempor dolor aute duis fugiat eu veniam adipisicing Lorem
                amet dolor. Non veniam sint velit irure nostrud sint culpa
                proident eiusmod adipisicing labore incididunt non aliquip. Ea
                exercitation aliquip incididunt laboris cupidatat cillum
                proident ad quis reprehenderit Lorem sint aute. Labore cupidatat
                esse dolor commodo excepteur sit. Officia veniam dolor et culpa
                nisi enim consequat eu voluptate. Cupidatat incididunt in
                exercitation non pariatur ea ex ex et. Minim fugiat excepteur
                irure tempor id. Duis ex enim cupidatat aute mollit cillum
                dolore nulla nisi adipisicing magna Lorem id ea. Pariatur Lorem
                deserunt elit velit cupidatat exercitation pariatur aliqua
                consequat. Sunt adipisicing minim elit cillum non. Sit et sunt
                eiusmod nisi. Officia ipsum non nulla veniam Lorem qui. Nulla
                commodo excepteur sit aute ex sit sint laboris quis aliquip ex
                magna irure. Dolore eu ut est quis eiusmod. Qui esse duis aute
                consectetur mollit veniam id irure aute est qui ut incididunt.
                Labore cillum est non eiusmod non excepteur eu exercitation amet
                sunt sunt deserunt. Deserunt ut laborum pariatur et eiusmod.
                Aute sunt eu ad magna laborum aliqua eu occaecat occaecat.
                Mollit do et cillum do eu nostrud. Laborum ullamco reprehenderit
                aliquip quis amet eiusmod aute.cat. Nisi reprehenderit nostrud
                laboris in commodo. Cupidatat irure enim irure non tempor
                eiusmod ea proident pariatur fugiat tempor. Lorem enim consequat
                consequat esse exercitation mollit esse voluptate. Eiusmod culpa
                minim laborum dolor. Adipisicing sunt culpa cupidatat cupidatat
                in laborum Lorem exercitation aute consequat eiusmod nisi
                occaecat. Est pariatur cupidatat esse magna. Proident cillum
                laborum deserunt magna nostrud Lorem in minim esse sint.
                Adipisicing est ut non deserunt. Duis in consectetur ad ipsum
                ipsum sint amet ipsum id fugiat sit voluptate. Veniam ea velit
                deserunt nisi. Incididunt commodo adipisicing anim ullamco
                cupidatat deserunt fugiat aute consequat nostrud ad laboris.
                Duis cillum minim ullamco labore quis voluptate et dolor ad do
                amet quis aliqua voluptate. Eiusmod incididunt enim quis est
                Lorem id culpa ipsum laboris voluptate sit id eu nisi.
                Consectetur dolore minim adipisicing voluptate cillum
                consectetur consectetur non irure ullamco in. Labore dolore esse
                deserunt sint. Pariatur aliquip in voluptate aliqua occaecat
                occaecat qui ut sunt id laborum nisi ex minim. Pariatur ut
                adipisicing exercitation irure voluptate minim qui cillum.
                Cillum veniam ea commodo adipisicing. Aliquip consequat eu
                fugiat ipsum pariatur sint reprehenderit incididunt
                reprehenderit voluptate do tempor ullamco. Nulla voluptate
                consectetur esse in aute cillum consequat cupidatat anim Lorem
                esse. Ullamco dolore labore veniam pariatur est magna sint enim
                proident officia excepteur nostrud. Dolore aliquip quis id
                officia fugiat est in. Dolor minim eu occaecat eu voluptate aute
                adipisicing. Culpa in anim velit voluptate consectetur id Lorem
                nostrud nisi quis pariatur excepteur velit dolor. Quis est
                mollit dolor dolore non adipisicing laboris magna eu nisi
                incididunt laboris eu. Sit nisi commodo excepteur exercitation
                fugiat aliquip. Sint dolore irure Lorem qui culpa aute enim do
                irure quis. Commodo cupidatat officia officia anim voluptate.
                Exercitation nulla consectetur nostrud culpa veniam tempor sint
                nisi. Proident magna tempor magna officia elit. Proident
                consectetur aliquip elit exercitation sint fugiat mollit
                deserunt cupidatat mollit et ad in occaecat. Culpa labore
                pariatur duis dolor magna non. Ipsum ad laboris veniam aute
                nisi. Aute sit laboris aute voluptate incididunt eiusmod ut id
                sint velit in cupidatat. Mollit aute tempor ullamco aliquip
                fugiat veniam esse proident et fugiat incididunt ipsum cillum.
                Magna nostrud ipsum exercitation irure elit in amet anim non
                adipisicing cupidatat consequat deserunt consequat. Quis non est
                est labore nisi aliqua voluptate deserunt. Fugiat eu mollit
                laborum laboris incididunt eu quis esse ea elit amet. Labore
                dolore velit irure adipisicing. Id velit ipsum magna
                exercitation laborum in culpa dolor. Occaecat ullamco labore qui
                consequat aute qui laboris minim nostrud do. Exercitation elit
                dolore dolor ea. Aliquip dolor pariatur incididunt anim dolor.
                Velit et elit aliqua ullamco officia. Labore magna reprehenderit
                reprehenderit ea qui cupidatat et ullamco aliqua. Dolore laboris
                eiusmod ea veniam ex. Dolor irure in ut esse irure ad id
                deserunt in laboris. Irure elit sit aute ullamco cupidatat
                commodo. Ullamco amet consectetur anim sint id. Laboris veniam
                culpa aliqua qui reprehenderit magna ad excepteur nisi ex
                labore. Culpa magna do laborum nulla adipisicing. Nulla
                excepteur fugiat fugiat qui fugiat non mollit nulla incididunt.
                Consequat in dolore esse mollit occaecat amet ut adipisicing ex
                veniam. Aliquip sunt labore nisi culpa tempor enim quis tempor
                id fugiat. Ea cillum veniam eiusmod aliqua ut. Fugiat mollit sit
                sit nulla aute irure cupidatat dolore veniam. In elit aliquip
                nostrud deserunt consectetur non. Cillum elit officia laboris
                ullamco exercitation ipsum irure. Incididunt irure elit
                incididunt ea irure esse sint deserunt occaecat aliquip esse
                esse mollit. Commodo aliqua eiusmod voluptate pariatur irure qui
                fugiat cupidatat non. Enim commodo ut non eiusmod. Amet est
                labore duis laborum. Irure qui est nostrud elit nulla Lorem
                eiusmod cillum consequat mollit. Ad duis reprehenderit pariatur
                aliqua veniam sunt veniam. Est labore anim esse laboris velit
                reprehenderit ullamco amet quis. Commodo proident mollit
                incididunt veniam deserunt irure ea dolore in mollit est veniam
                excepteur.
              </div>
              <div className="bottom-0 w-full bg-gray-500 fixed hidden">
                footer
              </div>
            </div>
          </div>
          {/** End Content  */}
          {/** Start Over Panel  */}
          <div className="absolute right-0 top-0 h-full w-56 bg-gray-300 overflow-hidden z-50 shadow hidden">
            <div className="overflow-y-auto max-h-screen overflow-x-hidden">
              <div className="p-2">
                <div className="flex flex-row justify-between font-bold pb-1">
                  <div>Over Panel Title</div>
                  <div className="rounded-full h-4 w-4 bg-white flex items-center justify-center shadow cursor-pointer hover:bg-gray-200">
                    X
                  </div>
                </div>
                <div className="border-t border-gray-600 pt-1">
                  Content Body
                </div>
              </div>
            </div>
          </div>
          {/** End Over Panel  */}
        </div>
      </div>
    );
  }
}
