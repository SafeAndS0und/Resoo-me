import React from "react";
import { Main } from "@components/Layouts/Main/Main";
import { Structure } from "@components/Modules/Structure/Structure";

// const download = (blob) => {
//   var url = window.URL.createObjectURL(blob);
//   var a = document.createElement("a");
//   a.href = url;
//   a.download = "resume.pdf";
//   document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
//   a.click();
//   a.remove(); //afterwards we remove the element again
// };
// const generate = (fn, ln) => {
//   console.log("aaa", fn, ln);
//   if (fn && ln) {
//     fetch("http://192.168.100.13:3001/", {
//       method: "POST",
//       body: JSON.stringify({ fn, ln }),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => res.blob())
//       .then(download);
//   }
// };

const Home = () => {
  return (
    <div>
      <Main>
        <Structure />
      </Main>
    </div>
  );
};

export default Home;
