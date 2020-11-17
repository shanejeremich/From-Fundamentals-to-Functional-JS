if (typeof window !== "undefined") {
  // const myAlert = () => {
  //   const x = "Help! I think I found a clue!";
  //   const alerter = () => {
  //     window.alert(x);
  //   };
  //   alerter();
  // };
  // console.log(myAlert());

  // const myAlert = () => {
  //   const x = "Help! I think I found a clue!";
  //   const alerter = () => {
  //     alert(x);
  //   };

  //   setTimeout(alerter, 1000);
  //   console.log("what happens first? this log or the alert?");
  // };
  // console.log(myAlert());

  const myAlert = () => {
    const x = "Help! I think I found a clue!";
    let count = 0;
    const alerter = () => {
      alert(`${x} ${++count}`);
    };

    return alerter;
  };

  const funcAlert = myAlert();
  const funcAlert2 = myAlert();
  funcAlert();
  funcAlert2();
}
