export default function fillValue() {
  let to1 = ["20/10-1", "10-4-3-2", "5/5+6/6-7/7"];
  let to2 = ["16/2/2/2", "17-9-8+2", "60*6/180"];
  let to3 = ["75/15-75/25", "(15+15)/10", "6*6/6*0.5"];
  let to4 = ["(58+58)/29", "15/5+1", "19-5-10"];
  let to5 = ["(70-10-10)/10", "8-8-8+13", "65/(4+4+5)"];
  let to6 = ["76-35*2", "0+2*2+2", "(90-60)/5"];
  let to7 = ["77/(3+3+5)", "99/11-2", "100-98+5"];
  let to8 = ["12/12+84/12", "13*(13-12)-5", "2*2*2/2*2"];
  let to9 = ["21/7*3", "(16/16+17)/2", "(77+22)/11"];
  let to10 = ["19-(3*3)", "12/6+16/2", "4-(2*-3)"];

  return [
    to1[Math.floor(Math.random() * 2.99)],
    to2[Math.floor(Math.random() * 2.99)],
    to3[Math.floor(Math.random() * 2.99)],
    to4[Math.floor(Math.random() * 2.99)],
    to5[Math.floor(Math.random() * 2.99)],
    to6[Math.floor(Math.random() * 2.99)],
    to7[Math.floor(Math.random() * 2.99)],
    to8[Math.floor(Math.random() * 2.99)],
    to9[Math.floor(Math.random() * 2.99)],
    to10[Math.floor(Math.random() * 2.99)],
  ];
}
