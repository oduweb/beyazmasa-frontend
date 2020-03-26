import React, { Component } from "react";

import { MdFilterList } from "react-icons/md";
import { FiPlus, FiSearch } from "react-icons/fi";
import { GoZap } from "react-icons/go";

class Example extends Component {
  render() {
    return (
      <div>
        <div className="p-2 bg-gray-200 rounded-b shadow">
          <div className="flex lg:flex-row sm:flex-col flex-col md:flex-row justify-between items-center">
            <div>Content Title</div>
            <div className="mr-2 lg:flex-row sm:flex-col flex-col md:flex-row flex items-center">
              <div className="relative flex flex-row items-center outline-none">
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
                <div
                  onClick={this.change}
                  className="bg-gray-500 rounded px-3 py-1 text-white mr-1 flex flex-row items-center cursor-pointer"
                >
                  <span className="mr-1">
                    <MdFilterList></MdFilterList>
                  </span>
                  <span className="select-none">Filters</span>
                </div>

                <div className=" bg-gray-500 rounded px-3 py-1 text-white mr-1 flex flex-row items-center cursor-pointer">
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
        <div className="pt-2 mb-6 pr-2">
          Velit velit ipsum esse consectetur commodo excepteur. Ad culpa eu
          consequat aute nulla adipisicing amet ullamco. Sit minim culpa
          consectetur ex ex deserunt ea qui reprehenderit occaecat ad minim enim
          minim. Sunt culpa pariatur officia ea aliquip dolore aliqua mollit
          elit occaeEa labore est voluptate laboris sunt. Reprehenderit sint
          irure in exercitation velit nulla elit. Aliquip laborum sint sunt nisi
          ullamco sint adipisicing voluptate quis elit eu ut do. Adipisicing
          ipsum minim reprehenderit et ipsum nulla consequat cupidatat laborum
          cillum. Sunt sint exercitation deserunt occaecat labore dolore.
          Laborum duis dolore nulla nulla est in velit proident. Minim deserunt
          ullamco in nulla ullamco mollit et anim. In magna non reprehenderit
          mollit mollit culpa est nostrud. Duis elit qui fugiat magna laborum
          ullamco adipisicing. Cillum cupidatat officia dolore culpa deserunt
          quis ad. Ut commodo fugiat exercitation fugiat. Nulla ut pariatur qui
          labore dolore cupidatat deserunt ea. Est nostrud irure do fugiat
          adipisicing exercitation ad irure aliquip. Adipisicing ut officia
          mollit aliqua et Lorem sit pariatur. Laborum fugiat anim ut minim
          tempor eu ut veniam sit velit nulla anim nisi cupidatat. Nulla duis
          quis laboris fugiat dolor cupidatat qui. Consectetur amet eu amet quis
          Lorem ullamco labore amet. Minim aliqua ipsum minim eiusmod officia
          labore non elit. Cillum nostrud ullamco sunt dolor commodo deserunt
          tempor eu ea aliquip. Labore veniam elit fugiat adipisicing sunt
          pariatur cillum fugiat. Ullamco mollit consectetur in exercitation
          voluptate. Eiusmod reprehenderit reprehenderit labore duis dolor est
          quis deserunt quis Lorem culpa mollit. Aliqua eiusmod esse ullamco
          enim labore adipisicing culpa cupidatat cillum voluptate. Occaecat
          amet ea enim ea enim in qui. Eiusmod magna ut reprehenderit Lorem aute
          nostrud. Eiusmod pariatur in nostrud ullamco incididunt ad minim in
          dolore minim dolore minim nostrud. Consectetur occaecat occaecat
          proident eiusmod aliqua cillum duis ullamco eu sit labore dolor
          officia. Sit dolore irure non quis officia. Voluptate labore non in
          irure. Cillum non ipsum elit elit eiusmod irure ut ex incididunt
          adipisicing. Irure fugiat anim ad laboris sit. Qui aliquip
          reprehenderit quis duis aute sunt exercitation ex veniam aliquip non
          reprehenderit id. Magna aute deserunt deserunt incididunt exercitation
          ad irure. Veniam laboris excepteur magna anim eiusmod officia officia
          minim. In cillum non reprehenderit eiusmod labore exercitation laboris
          labore in. Sit commodo ex culpa elit. Nulla adipisicing officia sit
          ipsum voluptate do et deserunt deserunt velit ut sit consequat. Anim
          dolore magna culpa cupidatat culpa tempor commodo cupidatat sit ipsum
          eiusmod nostrud magna. Fugiat sit proident ut velit sunt ad eu minim
          nisi elit excepteur. Incididunt exercitation labore ea cupidatat sunt
          aliqua aliqua. Sint ad irure sit laboris est officia do dolore aliquip
          commodo sint ullamco esse aliqua. Mollit quis ullamco dolor ipsum id
          occaecat ex laboris ipsum duis velit Lorem. Nisi irure dolore do
          nostrud. Ullamco dolore cillum incididunt cupidatat fugiat enim. Ipsum
          aliquip ad non amet tempor. Lorem occaecat culpa sint irure amet
          labore amet enim occaecat nisi non. Eu sint cillum tempor est sit
          cupidatat laborum. Deserunt ea fugiat in dolor velit Lorem. Ea
          adipisicing tempor labore enim eiusmod. Elit quis culpa dolor enim
          excepteur magna eu occaecat nostrud ea. Voluptate aute nisi laborum ex
          ad voluptate nulla exercitation nulla nulla deserunt. Et quis enim
          aliqua est sit occaecat occaecat ut non quis ad non occaecat.
          Consectetur do deserunt Lorem cillum voluptate do amet laborum
          deserunt in tempor esse voluptate anim.Pariatur commodo dolore nostrud
          labore labore occaecat sit sit. Incididunt nulla non ex enim dolore
          sint minim do. Mollit irure eu tempor et dolore duis aliquip ipsum
          est. Labore labore excepteur sint enim eiusmod. Ipsum officia laboris
          magna nulla esse quis consectetur excepteur sit non nostrud sunt et.
          Magna ad ut ullamco anim irure. Ex ex aliquip sint laborum deserunt
          tempor tempor. Qui eu cillum occaecat pariatur ad cillum. Excepteur
          ullamco pariatur in eu aliqua pariatur pariatur eu amet exercitation
          id magna. Consectetur esse esse adipisicing labore duis id officia do.
          Excepteur velit ex enim pariatur amet in proident cupidatat. Est minim
          commodo anim est excepteur ipsum culpa proident incididunt minim
          voluptate exercitation veniam consequat. Proident velit consequat eu
          proident aute reprehenderit ullamco. Cupidatat voluptate non culpa
          sunt dolore nostrud ad veniam minim proident. Laborum consectetur id
          anim sunt sunt pariatur. Laborum occaecat do sit culpa sunt ipsum
          ullamco adipisicing do sunt amet. Nisi deserunt dolore id amet
          deserunt do elit do. Commodo do aute qui ea reprehenderit labore
          voluptate fugiat esse. Nostrud incididunt fugiat tempor dolor aute
          duis fugiat eu veniam adipisicing Lorem amet dolor. Non veniam sint
          velit irure nostrud sint culpa proident eiusmod adipisicing labore
          incididunt non aliquip. Ea exercitation aliquip incididunt laboris
          cupidatat cillum proident ad quis reprehenderit Lorem sint aute.
          Labore cupidatat esse dolor commodo excepteur sit. Officia veniam
          dolor et culpa nisi enim consequat eu voluptate. Cupidatat incididunt
          in exercitation non pariatur ea ex ex et. Minim fugiat excepteur irure
          tempor id. Duis ex enim cupidatat aute mollit cillum dolore nulla nisi
          adipisicing magna Lorem id ea. Pariatur Lorem deserunt elit velit
          cupidatat exercitation pariatur aliqua consequat. Sunt adipisicing
          minim elit cillum non. Sit et sunt eiusmod nisi. Officia ipsum non
          nulla veniam Lorem qui. Nulla commodo excepteur sit aute ex sit sint
          laboris quis aliquip ex magna irure. Dolore eu ut est quis eiusmod.
          Qui esse duis aute consectetur mollit veniam id irure aute est qui ut
          incididunt. Labore cillum est non eiusmod non excepteur eu
          exercitation amet sunt sunt deserunt. Deserunt ut laborum pariatur et
          eiusmod. Aute sunt eu ad magna laborum aliqua eu occaecat occaecat.
          Mollit do et cillum do eu nostrud. Laborum ullamco reprehenderit
          aliquip quis amet eiusmod aute.cat. Nisi reprehenderit nostrud laboris
          in commodo. Cupidatat irure enim irure non tempor eiusmod ea proident
          pariatur fugiat tempor. Lorem enim consequat consequat esse
          exercitation mollit esse voluptate. Eiusmod culpa minim laborum dolor.
          Adipisicing sunt culpa cupidatat cupidatat in laborum Lorem
          exercitation aute consequat eiusmod nisi occaecat. Est pariatur
          cupidatat esse magna. Proident cillum laborum deserunt magna nostrud
          Lorem in minim esse sint. Adipisicing est ut non deserunt. Duis in
          consectetur ad ipsum ipsum sint amet ipsum id fugiat sit voluptate.
          Veniam ea velit deserunt nisi. Incididunt commodo adipisicing anim
          ullamco cupidatat deserunt fugiat aute consequat nostrud ad laboris.
          Duis cillum minim ullamco labore quis voluptate et dolor ad do amet
          quis aliqua voluptate. Eiusmod incididunt enim quis est Lorem id culpa
          ipsum laboris voluptate sit id eu nisi. Consectetur dolore minim
          adipisicing voluptate cillum consectetur consectetur non irure ullamco
          in. Labore dolore esse deserunt sint. Pariatur aliquip in voluptate
          aliqua occaecat occaecat qui ut sunt id laborum nisi ex minim.
          Pariatur ut adipisicing exercitation irure voluptate minim qui cillum.
          Cillum veniam ea commodo adipisicing. Aliquip consequat eu fugiat
          ipsum pariatur sint reprehenderit incididunt reprehenderit voluptate
          do tempor ullamco. Nulla voluptate consectetur esse in aute cillum
          consequat cupidatat anim Lorem esse. Ullamco dolore labore veniam
          pariatur est magna sint enim proident officia excepteur nostrud.
          Dolore aliquip quis id officia fugiat est in. Dolor minim eu occaecat
          eu voluptate aute adipisicing. Culpa in anim velit voluptate
          consectetur id Lorem nostrud nisi quis pariatur excepteur velit dolor.
          Quis est mollit dolor dolore non adipisicing laboris magna eu nisi
          incididunt laboris eu. Sit nisi commodo excepteur exercitation fugiat
          aliquip. Sint dolore irure Lorem qui culpa aute enim do irure quis.
          Commodo cupidatat officia officia anim voluptate. Exercitation nulla
          consectetur nostrud culpa veniam tempor sint nisi. Proident magna
          tempor magna officia elit. Proident consectetur aliquip elit
          exercitation sint fugiat mollit deserunt cupidatat mollit et ad in
          occaecat. Culpa labore pariatur duis dolor magna non. Ipsum ad laboris
          veniam aute nisi. Aute sit laboris aute voluptate incididunt eiusmod
          ut id sint velit in cupidatat. Mollit aute tempor ullamco aliquip
          fugiat veniam esse proident et fugiat incididunt ipsum cillum. Magna
          nostrud ipsum exercitation irure elit in amet anim non adipisicing
          cupidatat consequat deserunt consequat. Quis non est est labore nisi
          aliqua voluptate deserunt. Fugiat eu mollit laborum laboris incididunt
          eu quis esse ea elit amet. Labore dolore velit irure adipisicing. Id
          velit ipsum magna exercitation laborum in culpa dolor. Occaecat
          ullamco labore qui consequat aute qui laboris minim nostrud do.
          Exercitation elit dolore dolor ea. Aliquip dolor pariatur incididunt
          anim dolor. Velit et elit aliqua ullamco officia. Labore magna
          reprehenderit reprehenderit ea qui cupidatat et ullamco aliqua. Dolore
          laboris eiusmod ea veniam ex. Dolor irure in ut esse irure ad id
          deserunt in laboris. Irure elit sit aute ullamco cupidatat commodo.
          Ullamco amet consectetur anim sint id. Laboris veniam culpa aliqua qui
          reprehenderit magna ad excepteur nisi ex labore. Culpa magna do
          laborum nulla adipisicing. Nulla excepteur fugiat fugiat qui fugiat
          non mollit nulla incididunt. Consequat in dolore esse mollit occaecat
          amet ut adipisicing ex veniam. Aliquip sunt labore nisi culpa tempor
          enim quis tempor id fugiat. Ea cillum veniam eiusmod aliqua ut. Fugiat
          mollit sit sit nulla aute irure cupidatat dolore veniam. In elit
          aliquip nostrud deserunt consectetur non. Cillum elit officia laboris
          ullamco exercitation ipsum irure. Incididunt irure elit incididunt ea
          irure esse sint deserunt occaecat aliquip esse esse mollit. Commodo
          aliqua eiusmod voluptate pariatur irure qui fugiat cupidatat non. Enim
          commodo ut non eiusmod. Amet est labore duis laborum. Irure qui est
          nostrud elit nulla Lorem eiusmod cillum consequat mollit. Ad duis
          reprehenderit pariatur aliqua veniam sunt veniam. Est labore anim esse
          laboris velit reprehenderit ullamco amet quis. Commodo proident mollit
          incididunt veniam deserunt irure ea dolore in mollit est veniam
          excepteur. 1
        </div>
      </div>
    );
  }
}

export default Example;
