let slider;
let radio;
let matchData;
let teamLabels;
let footBallTitle;
let margin;
let checkLabel;

function setup() {
  //2022 節ごと勝敗
  //https://data.j-league.or.jp/SFRT05/?search=search&yearIdLabel=2022%E5%B9%B4&yearId=2022&competitionIdLabel=%E6%98%8E%E6%B2%BB%E5%AE%89%E7%94%B0%E7%94%9F%E5%91%BD%EF%BC%AA%EF%BC%91%E3%83%AA%E3%83%BC%E3%82%B0&competitionId=521&currIdx=-1#

  //2022 順位表
  //https://www.jleague.jp/standings/2022/

  //チームカラー
  //https://ayaito.net/webtips/color_code/8611/
  createCanvas(1000, 600);
  matchData = [
    {
      team: "Sapporo",
      win: [
        1, 1, 1, 1, 1, 1, 0, 3, 1, 3, 1, 3, 0, 3, 0, 0, 0, 3, 0, 0, 1, 0, 1, 3,
        0, 0, 1, 3, 3, 1, 3, 0, 3, 3,
      ],
    },
    {
      team: "Kashima",
      win: [
        3, 0, 3, 3, 3, 3, 3, 0, 1, 3, 3, 0, 3, 1, 1, 0, 3, 1, 3, 1, 1, 1, 0, 0,
        3, 1, 0, 1, 1, 1, 0, 1, 3, 1,
      ],
    },
    {
      team: "Urawa",
      win: [
        0, 0, 3, 0, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 3, 3, 1, 1, 3, 3, 3, 0,
        3, 0, 1, 1, 3, 1, 0, 3, 0, 1,
      ],
    },
    {
      team: "Kashiwa",
      win: [
        3, 3, 0, 3, 1, 3, 3, 0, 0, 0, 3, 1, 0, 1, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3,
        0, 1, 0, 1, 0, 1, 1, 1, 0, 0,
      ],
    },
    {
      team: "FCTokyo",
      win: [
        0, 3, 3, 3, 0, 3, 1, 1, 3, 0, 0, 0, 1, 3, 3, 0, 0, 1, 3, 0, 3, 3, 0, 3,
        3, 0, 1, 1, 1, 3, 3, 0, 0, 0,
      ],
    },
    {
      team: "Kawasaki",
      win: [
        3, 0, 3, 3, 1, 3, 3, 0, 1, 3, 3, 3, 3, 1, 0, 0, 3, 1, 0, 3, 0, 3, 3, 3,
        3, 0, 3, 1, 1, 0, 3, 3, 3, 3,
      ],
    },
    {
      team: "Yokohama",
      win: [
        1, 3, 0, 3, 3, 1, 1, 3, 0, 3, 3, 3, 1, 0, 3, 3, 3, 3, 3, 3, 1, 1, 3, 0,
        1, 3, 3, 3, 1, 3, 0, 0, 3, 3,
      ],
    },
    {
      team: "Shonan",
      win: [
        0, 1, 0, 1, 0, 0, 0, 1, 3, 0, 0, 1, 0, 3, 3, 0, 3, 3, 1, 3, 1, 1, 0, 0,
        1, 3, 0, 1, 1, 1, 3, 0, 3, 3,
      ],
    },
    {
      team: "Shimizu",
      win: [
        1, 3, 0, 0, 1, 0, 1, 1, 1, 1, 3, 0, 1, 0, 0, 0, 3, 1, 0, 0, 3, 0, 1, 3,
        3, 1, 3, 0, 1, 0, 0, 1, 0, 0,
      ],
    },
    {
      team: "Jubiro",
      win: [
        1, 0, 3, 1, 0, 0, 1, 1, 1, 3, 0, 0, 3, 0, 1, 0, 3, 1, 0, 0, 0, 0, 3, 0,
        0, 0, 1, 0, 1, 1, 3, 1, 0, 1,
      ],
    },
    {
      team: "Nagoya",
      win: [
        3, 1, 0, 1, 0, 3, 0, 1, 1, 0, 1, 0, 3, 3, 3, 0, 0, 1, 1, 3, 0, 1, 3, 1,
        3, 0, 3, 1, 1, 1, 0, 1, 3, 3,
      ],
    },
    {
      team: "Kyoto",
      win: [
        3, 1, 0, 1, 0, 3, 1, 3, 3, 0, 1, 0, 1, 0, 0, 3, 0, 0, 3, 1, 0, 1, 1, 0,
        0, 3, 1, 0, 0, 3, 1, 0, 1, 1,
      ],
    },
    {
      team: "GOsaka",
      win: [
        0, 3, 1, 1, 0, 3, 1, 1, 0, 0, 1, 3, 3, 0, 0, 0, 0, 3, 1, 0, 0, 0, 1, 0,
        0, 3, 3, 0, 1, 0, 1, 3, 3, 1,
      ],
    },
    {
      team: "COsaka",
      win: [
        1, 1, 0, 3, 1, 3, 0, 3, 1, 0, 1, 3, 0, 3, 3, 3, 0, 1, 3, 1, 1, 3, 3, 3,
        0, 0, 3, 3, 1, 1, 1, 0, 1, 0,
      ],
    },
    {
      team: "Kobe",
      win: [
        0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 3, 0, 0, 1, 3, 0, 0, 3, 3, 3, 1, 0, 0,
        3, 0, 1, 3, 3, 3, 3, 3, 0, 0,
      ],
    },
    {
      team: "Hiroshima",
      win: [
        1, 1, 1, 0, 0, 3, 3, 3, 1, 1, 0, 3, 1, 3, 3, 3, 3, 0, 3, 0, 1, 1, 0, 3,
        3, 3, 3, 3, 0, 3, 0, 3, 3, 1,
      ],
    },
    {
      team: "Fukuoka",
      win: [
        1, 1, 1, 0, 3, 1, 0, 0, 1, 3, 3, 1, 0, 3, 0, 1, 0, 0, 1, 3, 3, 1, 0, 0,
        0, 1, 0, 0, 0, 3, 0, 3, 3, 1,
      ],
    },
    {
      team: "Tosu",
      win: [
        1, 1, 1, 3, 1, 1, 3, 0, 1, 3, 1, 3, 0, 1, 1, 3, 0, 3, 0, 0, 1, 1, 3, 1,
        3, 1, 0, 3, 0, 1, 0, 0, 0, 1,
      ],
    },
  ];

  teamLabels = [
    {
      key: "Sapporo",
      name: "北海道コンサドーレ札幌",
      color: color(2, 81, 111),
    },
    {
      key: "Kashima",
      name: "鹿島アントラーズ",
      color: color(183, 24, 64),
    },
    {
      key: "Urawa",
      name: "浦和レッズ",
      color: color(231, 0, 43),
    },
    {
      key: "Kashiwa",
      name: "柏レイソル",
      color: color(255, 241, 0),
    },
    {
      key: "FCTokyo",
      name: "FC東京",
      color: color(33, 65, 152),
    },
    {
      key: "Kawasaki",
      name: "川崎フロンターレ",
      color: color(53, 160, 217),
    },
    {
      key: "Yokohama",
      name: "横浜F・マリノス",
      color: color(0, 57, 137),
    },
    {
      key: "Shonan",
      name: "湘南ベルマーレ",
      color: color(103, 180, 100),
    },
    {
      key: "Shimizu",
      name: "清水エスパレス",
      color: color(250, 165, 40),
    },
    {
      key: "Jubiro",
      name: "ジュビロ磐田",
      color: color(110, 157, 211),
    },
    {
      key: "Nagoya",
      name: "名古屋グランパス",
      color: color(218, 54, 27),
    },
    {
      key: "Kyoto",
      name: "京都サンガ",
      color: color(116, 0, 107),
    },
    {
      key: "GOsaka",
      name: "ガンバ大阪",
      color: color(9, 63, 166),
    },
    {
      key: "COsaka",
      name: "セレッソ大阪",
      color: color(212, 0, 105),
    },
    {
      key: "Kobe",
      name: "ヴィッセル神戸",
      color: color(143, 10, 31),
    },
    {
      key: "Hiroshima",
      name: "サンフレッチェ広島",
      color: color(80, 49, 143),
    },
    {
      key: "Fukuoka",
      name: "アビスパ福岡",
      color: color(0, 255, 0),
    },
    {
      key: "Tosu",
      name: "サガン鳥栖",
      color: color(0, 150, 210),
    },
  ];

  footBallTitle = {
    chart: "2022順位",
    xAxis: "節",
    yAxis: "勝ち点",
  };

  for (let i = 0; i < teamLabels.length; i++) {
    teamLabels[i].visible = true;
  }

  margin = {
    top: 30,
    right: 200,
    bottom: 50,
    left: 50,
  };

  let checkLabel = -1;

  slider = createSlider(2, matchData[0].win.length, 15, 1);
  slider.style("width", "400px");

  radio = createRadio();
  radio.option("合計");
  radio.option("単体");
  radio.selected("合計");
}

function draw() {
  background(255);
  const footBallData = convertData(matchData, radio.value() === "合計").slice(
    0,
    slider.value()
  );

  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const minX = 0;
  const maxX = footBallData.length - 1;
  const minY = 0;

  const maxY = Math.max(
    ...footBallData
      .map((e) => {
        return Object.values(e).filter((e) => typeof e === "number");
      })
      .flat()
  );

  push();
  translate(margin.left, margin.top);
  drawChart(
    footBallData,
    teamLabels,
    footBallTitle,
    minX,
    maxX,
    minY,
    maxY,
    margin,
    chartWidth,
    chartHeight
  );
  pop();
}

function convertData(input, sum = false) {
  const length = input[0].win.length;
  const teamLength = input.length;
  let arr = [];
  arr.push({ label: "0" });
  for (let j = 0; j < teamLength; j++) {
    arr[0][input[j].team] = 0;
  }
  for (let i = 1; i < length + 1; i++) {
    arr.push({ label: `${i}` });
    for (let j = 0; j < teamLength; j++) {
      if (sum && i !== 0) {
        arr[i][input[j].team] = arr[i - 1][input[j].team] + input[j].win[i];
      } else {
        arr[i][input[j].team] = input[j].win[i];
      }
    }
  }
  return arr;
}

function drawChart(
  data,
  labels,
  title,
  minX,
  maxX,
  minY,
  maxY,
  margin,
  chartWidth,
  chartHeight
) {
  const xScale = d3
    .scaleLinear()
    .domain([0, data.length - 1])
    .nice();
  const yScale = d3
    .scaleLinear()
    .domain(
      d3.extent(
        Object.values(data)
          .map((e) => Object.values(e).filter((e) => typeof e === "number"))
          .flat()
      )
    )
    .nice();

  push();
  translate(0, chartHeight);
  drawXAxis(data, title.xAxis, minX, maxX, chartWidth);
  pop();

  push();
  translate(0, 0);
  drawYAxis(max(1, yScale.ticks()[1]), title.yAxis, minY, maxY, chartHeight);
  pop();

  push();
  translate(0, 0);
  drawContent(data, labels, minX, maxX, minY, maxY, chartWidth, chartHeight);
  pop();

  push();
  translate(chartWidth + 10, 0);
  drawLegend(chartWidth + 10, 0, margin, labels);
  pop();

  push();
  translate(chartWidth / 2, -15);
  drawTitle(title.chart);
  pop();

  push();
  translate(50, 50);
  PieChart(data, labels, 100);
  pop();
}

function drawContent(
  data,
  labels,
  minX,
  maxX,
  minY,
  maxY,
  chartWidth,
  chartHeight
) {
  for (let i = 0; i < labels.length; i++) {
    if ((labels[i].visible && checkLabel == -1) || checkLabel == i) {
      drawLine(
        data,
        labels[i].key,
        labels[i].color,
        minX,
        maxX,
        minY,
        maxY,
        chartWidth,
        chartHeight
      );
    }
  }
}

function drawLine(
  data,
  key,
  color,
  minX,
  maxX,
  minY,
  maxY,
  chartWidth,
  chartHeight
) {
  noFill();
  stroke(color);
  beginShape();
  for (let i = 0; i < data.length; i++) {
    const x = map(i, minX, maxX, 0, chartWidth);
    const y = map(data[i][key], minY, maxY, chartHeight, 0);
    vertex(x, y);
  }
  endShape();
}

function drawLegend(x, y, margin, labels) {
  // 凡例の色とラベルを描画
  checkLabel = -1;
  for (let i = 0; i < labels.length; i++) {
    push();
    translate(0, i * 20);
    fill(labels[i].color);
    noStroke();
    rectMode(CENTER);
    rect(5, 0, 10, 10);
    fill(0);
    noStroke();
    textAlign(LEFT, CENTER);
    text(labels[i].name, 12, 0);
    const yi = y + i * 20;
    if (
      x < mouseX - margin.left &&
      mouseX - margin.left < x + 10 + textWidth(labels[i].name) &&
      yi - 5 < mouseY - margin.top &&
      mouseY - margin.top < yi + 5
    ) {
      checkLabel = i;
    }
    pop();
  }
}

function mouseClicked() {
  const chartWidth = width - margin.left - margin.right;
  chVizLegend(chartWidth + 10, 0, margin, teamLabels);
}

function chVizLegend(x, y, margin, labels) {
  for (let i = 0; i < labels.length; i++) {
    const yi = y + i * 20;
    if (
      x < mouseX - margin.left &&
      mouseX - margin.left < x + 10 + textWidth(labels[i].name) &&
      yi - 5 < mouseY - margin.top &&
      mouseY - margin.top < yi + 5
    ) {
      labels[i].visible = !labels[i].visible;
    }
  }
}

function drawXAxis(data, title, minX, maxX, chartWidth) {
  for (let i = 0; i < data.length; i++) {
    const x = map(i, minX, maxX, 0, chartWidth);
    const y = 5;
    textAlign(CENTER, TOP);
    text(data[i].label, x, y);
  }

  line(0, 0, chartWidth, 0);

  push();
  translate(chartWidth / 2, 0 + 35);
  textSize(12);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(title, 0, 0);
  pop();
}

function drawYAxis(step, title, minY, maxY, chartHeight) {
  for (let i = minY; i <= maxY; i += step) {
    const x = -5;
    const y = map(i, minY, maxY, chartHeight, 0);
    textAlign(RIGHT, CENTER);
    text(i, x, y);
  }

  line(0, 0, 0, chartHeight);

  push();
  translate(-35, chartHeight / 2);
  rotate(radians(-90));
  textSize(12);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(title, 0, 0);
  pop();
}

function drawTitle(title) {
  textSize(12);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(title, 0, 0);
}

function PieChart(data, labels, chartRadius) {
  console.log(
    ...Object.values(data[data.length - 1]).filter((e) => typeof e === "number")
  );
  const vals = Object.values(data[data.length - 1]).filter(
    (e) => typeof e === "number"
  );
  const sum = vals.reduce((a, b) => a + b, 0);
  const angles = vals.map((e) => (e / sum) * TWO_PI);
  let lastAngle = 0;
  for (let i = 0; i < angles.length; i++) {
    const angle = angles[i];
    push();
    noStroke();
    if ((labels[i].visible && checkLabel == -1) || checkLabel == i) {
      fill(labels[i].color);
      arc(0, 0, chartRadius, chartRadius, lastAngle, lastAngle + angle);
    }
    lastAngle += angle;
    pop();
  }
}
