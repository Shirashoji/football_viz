let slider;
let radio;
let matchData;
let teamLabels;
let footBallTitle;

function setup() {
  createCanvas(1000, 600);
  matchData = [
    {
      team: "北海道コンサドーレ札幌",
      win: [
        1, 1, 1, 1, 1, 1, 0, 3, 1, 3, 1, 3, 0, 3, 0, 0, 0, 3, 0, 0, 1, 0, 1, 3,
        0, 0, 1, 3, 3, 1, 3, 0, 3, 3,
      ],
    },
    {
      team: "鹿島アントラーズ",
      win: [
        3, 0, 3, 3, 3, 3, 3, 0, 1, 3, 3, 0, 3, 1, 1, 0, 3, 1, 3, 1, 1, 1, 0, 0,
        3, 1, 0, 1, 1, 1, 0, 1, 3, 1,
      ],
    },
    {
      team: "浦和レッズ",
      win: [
        0, 0, 3, 0, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 3, 3, 1, 1, 3, 3, 3, 0,
        3, 0, 1, 1, 3, 1, 0, 3, 0, 1,
      ],
    },
    {
      team: "柏レイソル",
      win: [
        3, 3, 0, 3, 1, 3, 3, 0, 0, 0, 3, 1, 0, 1, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3,
        0, 1, 0, 1, 0, 1, 1, 1, 0, 0,
      ],
    },
    {
      team: "FC東京",
      win: [
        0, 3, 3, 3, 0, 3, 1, 1, 3, 0, 0, 0, 1, 3, 3, 0, 0, 1, 3, 0, 3, 3, 0, 3,
        3, 0, 1, 1, 1, 3, 3, 0, 0, 0,
      ],
    },
    {
      team: "川崎フロンターレ",
      win: [
        3, 0, 3, 3, 1, 3, 3, 0, 1, 3, 3, 3, 3, 1, 0, 0, 3, 1, 0, 3, 0, 3, 3, 3,
        3, 0, 3, 1, 1, 0, 3, 3, 3, 3,
      ],
    },
    {
      team: "横浜F・マリノス",
      win: [
        1, 3, 0, 3, 3, 1, 1, 3, 0, 3, 3, 3, 1, 0, 3, 3, 3, 3, 3, 3, 1, 1, 3, 0,
        1, 3, 3, 3, 1, 3, 0, 0, 3, 3,
      ],
    },
    {
      team: "湘南ベルマーレ",
      win: [
        0, 1, 0, 1, 0, 0, 0, 1, 3, 0, 0, 1, 0, 3, 3, 0, 3, 3, 1, 3, 1, 1, 0, 0,
        1, 3, 0, 1, 1, 1, 3, 0, 3, 3,
      ],
    },
    {
      team: "清水エスパルス",
      win: [
        1, 3, 0, 0, 1, 0, 1, 1, 1, 1, 3, 0, 1, 0, 0, 0, 3, 1, 0, 0, 3, 0, 1, 3,
        3, 1, 3, 0, 1, 0, 0, 1, 0, 0,
      ],
    },
    {
      team: "ジュビロ磐田",
      win: [
        1, 0, 3, 1, 0, 0, 1, 1, 1, 3, 0, 0, 3, 0, 1, 0, 3, 1, 0, 0, 0, 0, 3, 0,
        0, 0, 1, 0, 1, 1, 3, 1, 0, 1,
      ],
    },
    {
      team: "名古屋グランパス",
      win: [
        3, 1, 0, 1, 0, 3, 0, 1, 1, 0, 1, 0, 3, 3, 3, 0, 0, 1, 1, 3, 0, 1, 3, 1,
        3, 0, 3, 1, 1, 1, 0, 1, 3, 3,
      ],
    },
    {
      team: "京都サンガF.C.",
      win: [
        3, 1, 0, 1, 0, 3, 1, 3, 3, 0, 1, 0, 1, 0, 0, 3, 0, 0, 3, 1, 0, 1, 1, 0,
        0, 3, 1, 0, 0, 3, 1, 0, 1, 1,
      ],
    },
    {
      team: "ガンバ大阪",
      win: [
        0, 3, 1, 1, 0, 3, 1, 1, 0, 0, 1, 3, 3, 0, 0, 0, 0, 3, 1, 0, 0, 0, 1, 0,
        0, 3, 3, 0, 1, 0, 1, 3, 3, 1,
      ],
    },
    {
      team: "セレッソ大阪",
      win: [
        1, 1, 0, 3, 1, 3, 0, 3, 1, 0, 1, 3, 0, 3, 3, 3, 0, 1, 3, 1, 1, 3, 3, 3,
        0, 0, 3, 3, 1, 1, 1, 0, 1, 0,
      ],
    },
    {
      team: "ヴィッセル神戸",
      win: [
        0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 3, 0, 0, 1, 3, 0, 0, 3, 3, 3, 1, 0, 0,
        3, 0, 1, 3, 3, 3, 3, 3, 0, 0,
      ],
    },
    {
      team: "サンフレッチェ広島",
      win: [
        1, 1, 1, 0, 0, 3, 3, 3, 1, 1, 0, 3, 1, 3, 3, 3, 3, 0, 3, 0, 1, 1, 0, 3,
        3, 3, 3, 3, 0, 3, 0, 3, 3, 1,
      ],
    },
    {
      team: "アビスパ福岡",
      win: [
        1, 1, 1, 0, 3, 1, 0, 0, 1, 3, 3, 1, 0, 3, 0, 1, 0, 0, 1, 3, 3, 1, 0, 0,
        0, 1, 0, 0, 0, 3, 0, 3, 3, 1,
      ],
    },
    {
      team: "サガン鳥栖",
      win: [
        1, 1, 1, 3, 1, 1, 3, 0, 1, 3, 1, 3, 0, 1, 1, 3, 0, 3, 0, 0, 1, 1, 3, 1,
        3, 1, 0, 3, 0, 1, 0, 0, 0, 1,
      ],
    },
  ];

  teamLabels = [
    {
      key: "北海道コンサドーレ札幌",
      name: "北海道コンサドーレ札幌",
      color: color(2, 81, 111),
    },
    {
      key: "鹿島アントラーズ",
      name: "鹿島アントラーズ",
      color: color(183, 24, 64),
    },
    { key: "浦和レッズ", name: "浦和レッズ", color: color(231, 0, 43) },
    { key: "柏レイソル", name: "柏レイソル", color: color(255, 241, 0) },
    { key: "FC東京", name: "FC東京", color: color(33, 65, 152) },
    {
      key: "川崎フロンターレ",
      name: "川崎フロンターレ",
      color: color(53, 160, 217),
    },
    {
      key: "横浜F・マリノス",
      name: "横浜F・マリノス",
      color: color(0, 57, 137),
    },
    {
      key: "湘南ベルマーレ",
      name: "湘南ベルマーレ",
      color: color(103, 180, 100),
    },
    {
      key: "清水エスパレス",
      name: "清水エスパレス",
      color: color(250, 165, 40),
    },
    {
      key: "ジュビロ磐田",
      name: "ジュビロ磐田",
      color: color(110, 157, 211),
    },
    {
      key: "名古屋グランパス",
      name: "名古屋グランパス",
      color: color(218, 54, 27),
    },
    { key: "京都サンガ", name: "京都サンガ", color: color(116, 0, 107) },
    { key: "ガンバ大阪", name: "ガンバ大阪", color: color(9, 63, 166) },
    { key: "セレッソ大阪", name: "セレッソ大阪", color: color(212, 0, 105) },
    {
      key: "ヴィッセル神戸",
      name: "ヴィッセル神戸",
      color: color(143, 10, 31),
    },
    {
      key: "サンフレッチェ広島",
      name: "サンフレッチェ広島",
      color: color(80, 49, 143),
    },
    { key: "アビスパ福岡", name: "アビスパ福岡", color: color(0, 255, 0) },
    { key: "サガン鳥栖", name: "サガン鳥栖", color: color(0, 150, 210) },
  ];

  footBallTitle = {
    chart: "順位",
    xAxis: "節",
    yAxis: "勝ち点",
  };

  slider = createSlider(2, matchData[0].win.length, 15, 1);
  slider.style("width", "400px");

  radio = createRadio();
  radio.option("合計");
  radio.option("単体");
  radio.selected("合計");
  // console.log(matchData[0].win.length);
  // noLoop();
}

function draw() {
  background(255);
  console.log(radio.value() === "合計");
  const footBallData = convertData(matchData, radio.value() === "合計").slice(
    0,
    slider.value()
  );
  console.log(footBallData);
  console.log(slider.value());

  const margin = {
    top: 30,
    right: 200,
    bottom: 50,
    left: 50,
  };

  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const minX = 0;
  const maxX = footBallData.length - 1;
  const minY = 0;

  const maxY = Math.max(
    ...footBallData
      .map((e) => {
        // delete e.label;
        return Object.values(e).filter((e) => typeof e === "number");
      })
      .flat()
  );

  // .filter(({ team: point }) => team === "label")

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
  push();
  translate(0, chartHeight);
  drawXAxis(data, title.xAxis, minX, maxX, chartWidth);
  pop();

  push();
  translate(0, 0);
  drawYAxis(2, title.yAxis, minY, maxY, chartHeight);
  pop();

  push();
  translate(0, 0);
  drawContent(data, labels, minX, maxX, minY, maxY, chartWidth, chartHeight);
  pop();

  push();
  translate(chartWidth + 10, 0);
  drawLegend(labels);
  pop();

  push();
  translate(chartWidth / 2, -15);
  drawTitle(title.chart);
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

function drawLegend(labels) {
  // 凡例の色とラベルを描画

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
    pop();
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
