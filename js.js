const cities = [
  { name: "Київ", image: "https://турпоиск.kiev.ua/images/foto-blog/kyiv.jpg" },
  {
    name: "Львів",
    image: "https://ukr-prokat.com/wp-content/uploads/2020/07/lviv.jpg"
  },
  {
    name: "Одеса",
    image:
      "https://aws-travel-guide.s3.eu-west-1.amazonaws.com/default_image_size/603fbe7b33f8d_%D0%BE%D0%B4%D0%B5%D1%81%D0%B0.jpg"
  },
  {
    name: "Харків",
    image:
      "https://gdb.rferl.org/74879f92-2852-4465-9f93-ef9bd619fe1e_w1200_r1.jpg"
  },
  {
    name: "Дніпро",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9iOUTWnq73kXojIvkgyURErePhyDZvQO6gA&s"
  },
  {
    name: "Запоріжжя",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/%D0%9D%D1%96%D1%87%D0%BD%D0%B8%D0%B9_%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82.jpg/275px-%D0%9D%D1%96%D1%87%D0%BD%D0%B8%D0%B9_%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82.jpg"
  },
  {
    name: "Чернівці",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Chernivtsi_University.jpg/1000px-Chernivtsi_University.jpg"
  },
  {
    name: "Полтава",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofbIAL41FiEKJPmB9PLxOIjZFL7Ln5uxjxg&s"
  },
  {
    name: "Рівне",
    image: "https://dovkola.media/wp-content/uploads/2022/10/i129069.jpeg"
  }
];

let correctCity;
let remainingCities = [...cities];

function getRandomCity() {
  const randomIndex = Math.floor(Math.random() * remainingCities.length);
  return remainingCities[randomIndex];
}

function updateUI() {
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  const randomCity = getRandomCity();
  correctCity = randomCity.name;
  document.getElementById(
    "city-image"
  ).innerHTML = `<img src="${randomCity.image}" alt="${randomCity.name}">`;

  const shuffledCities = shuffle([...remainingCities]);
  shuffledCities.forEach((city) => {
    const button = document.createElement("button");
    button.textContent = city.name;
    button.onclick = () => checkAnswer(city.name);
    optionsContainer.appendChild(button);
  });

  document.getElementById("result").textContent = "";
}

function checkAnswer(selectedCity) {
  if (selectedCity === correctCity) {
    document.getElementById("result").textContent = "Правильно!";
    remainingCities = remainingCities.filter(
      (city) => city.name !== correctCity
    );
    if (remainingCities.length === 0) {
      document.getElementById("result").textContent =
        "Вітаємо! Ви вгадали всі міста!";
      document.getElementById("next").style.display = "none";
    } else {
      setTimeout(updateUI, 1000);
    }
  } else {
    document.getElementById("result").textContent =
      "Неправильно, спробуйте ще раз!";
  }
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
  return array;
}

document.getElementById("next").onclick = updateUI;

updateUI();
