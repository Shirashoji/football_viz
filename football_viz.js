function setup() {
  createCanvas(400, 300);
  noLoop();
}

function draw() {
  background(255);
  const temperatureData = [
    { label: "12:00", cityA: 25, cityB: 23, cityC: 28 },
    { label: "13:00", cityA: 26, cityB: 22, cityC: 27 },
    { label: "14:00", cityA: 28, cityB: 24, cityC: 29 },
    { label: "15:00", cityA: 27, cityB: 23, cityC: 30 },
    { label: "16:00", cityA: 26, cityB: 25, cityC: 28 },
    { label: "17:00", cityA: 24, cityB: 22, cityC: 26 },
  ];
  const labels = [
    { key: "cityA", name: "都市A", color: color(255, 0, 0) },
    { key: "cityB", name: "都市B", color: color(0, 255, 0) },
    { key: "cityC", name: "都市C", color: color(0, 0, 255) },
  ];
  const title = {
    chart: "都市の気温",
    xAxis: "時刻",
    yAxis: "気温（℃）",
  };

  const margin = {
    top: 30,
    right: 70,
    bottom: 50,
    left: 50,
  };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const minX = 0;
  const maxX = temperatureData.length - 1;
  const minY = 20;
  const maxY = 30;

  push();
  translate(margin.left, margin.top);
  drawChart(
    temperatureData,
    labels,
    title,
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
