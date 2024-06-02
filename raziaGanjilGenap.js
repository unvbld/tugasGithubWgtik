function kenaRazia(date, data) {
    const restrictedLocations = [
      "Gajah Mada",
      "Hayam Wuruk",
      "Sisingamangaraja",
      "Panglima Polim",
      "Fatmawati",
      "Tomang Raya"
    ];
  

    const isOdd = (num) => num % 2 !== 0;
    
  
    const dateIsOdd = isOdd(date);
  

    let result = [];
  
    for (let i = 0; i < data.length; i++) {
      const vehicle = data[i];
      const platNumber = vehicle.plat.split(" ")[1]; 
      const lastDigit = parseInt(platNumber[platNumber.length - 1]); // Get the last digit of the plate number
      const platIsOdd = isOdd(lastDigit);
  
     
      let violationCount = 0;
  
      // Only consider vehicles of type "Mobil"
      if (vehicle.type === "Mobil") {
        // Check each route the vehicle passes through
        for (let j = 0; j < vehicle.rute.length; j++) {
          const route = vehicle.rute[j];
          // Check if the route is a restricted location
          if (restrictedLocations.includes(route)) {
            // Check for violation
            if (dateIsOdd !== platIsOdd) {
              violationCount++;
            }
          }
        }
  
        // If there are violations, add to the result array
        if (violationCount > 0) {
          result.push({
            name: vehicle.name,
            tilang: violationCount
          });
        }
      }
    }
  
    return result;
  }
  
  console.log(
    kenaRazia(27, [
      {
        name: "Denver",
        plat: "B 2791 KDS",
        type: "Mobil",
        rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"]
      },
      {
        name: "Toni",
        plat: "B 1212 JBB",
        type: "Mobil",
        rute: [
          "Pintu Besar Selatan",
          "Panglima Polim",
          "Depok",
          "Senen Raya",
          "Kemang"
        ]
      },
      {
        name: "Stark",
        plat: "B 444 XSX",
        type: "Motor",
        rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]
      },
      {
        name: "Anna",
        plat: "B 678 DD",
        type: "Mobil",
        rute: [
          "Fatmawati",
          "Panglima Polim",
          "Depok",
          "Senen Raya",
          "Kemang",
          "Gajah Mada"
        ]
      }
    ])
  );
  
