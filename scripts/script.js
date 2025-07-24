const center_x = 117.6;
const center_y = 173.0;
const scale_x = 0.02072;
const scale_y = 0.0205;

CUSTOM_CRS = L.extend({}, L.CRS.Simple, {
    projection: L.Projection.LonLat,
    scale: function(zoom) {

        return Math.pow(2, zoom);
    },
    zoom: function(sc) {

        return Math.log(sc) / 0.6931471805599453;
    },
	distance: function(pos1, pos2) {
        var x_difference = pos2.lng - pos1.lng;
        var y_difference = pos2.lat - pos1.lat;
        return Math.sqrt(x_difference * x_difference + y_difference * y_difference);
    },
	transformation: new L.Transformation(scale_x, center_x, -scale_y, center_y),
    infinite: true
});

var SateliteStyle = L.tileLayer('mapStyles/styleSatelite/{z}/{x}/{y}.jpg', {minZoom: 0,maxZoom: 8,noWrap: true,continuousWorld: false,attribution: 'Online map GTA V',id: 'SateliteStyle map',}),
	AtlasStyle	= L.tileLayer('mapStyles/styleAtlas/{z}/{x}/{y}.jpg', {minZoom: 0,maxZoom: 5,noWrap: true,continuousWorld: false,attribution: 'Online map GTA V',id: 'styleAtlas map',}),
	GridStyle	= L.tileLayer('mapStyles/styleGrid/{z}/{x}/{y}.png', {minZoom: 0,maxZoom: 5,noWrap: true,continuousWorld: false,attribution: 'Online map GTA V',id: 'styleGrid map',});

var ExampleGroup = L.layerGroup();

var Icons = {
	"Example" :ExampleGroup,
};



var mymap = L.map('map', {
    crs: CUSTOM_CRS,
    minZoom: 2,
    maxZoom: 5,
    Zoom: 5,
    maxNativeZoom: 5,
    preferCanvas: true,
    layers: [AtlasStyle,ExampleGroup],
    center: [0, 0],
    zoom: 3,
});

var layersControl = L.control.layers({ "Satelite": SateliteStyle,"Atlas": AtlasStyle,"Grid":GridStyle}, Icons).addTo(mymap);


function customIcon(icon){
	return L.icon({
		iconUrl: `blips/${icon}.png`,
		iconSize:     [22, 22],
		iconAnchor:   [20, 20], 
		popupAnchor:  [-10, -27]
	});
}

function XY(x, y) {
    return [y, x];
}

const locations = [
    { label: "1. ปั๊มแลนด์ฟ้า", pos: XY(-2158.8658865886587, -345.8877137713766) },
    { label: "2. ตึกกระจกแลนด์ฟ้า", pos: XY(-2038.7952857785779, -368.74156165616506) },
    { label: "3. ลานกิจกรรม", pos: XY(-1736.9486948694869, 156.193744374438) },
    { label: "4. แลนด์น้ำตาล", pos: XY(-1311.3585344711648, 256.5355040949452) },
    { label: "5. แลนด์ฟ้า", pos: XY(-1997.0234396711817, -496.04681086301935) },
    { label: "6. สุสาน", pos: XY(-1679.2866786678667, -306.15717821782124) },
    { label: "7. สี่แยกสุสาน", pos: XY(-1561.8530603060306, -180.98841134113354) },
    { label: "8. หน้าสนามกอล์ฟ", pos: XY(-1325.5794329432943, -41.05254275427487) },
    { label: "9. หลังสนามกอล์ฟ", pos: XY(0, 0) },
    { label: "10. เครนเหลืองแลนด์ดำ", pos: XY(0, 0) },
    { label: "11. แลนด์ดำ", pos: XY(0, 0) },
    { label: "12. ธนาคารใหญ่", pos: XY(0, 0) },
    { label: "13. ร้านคลินตั้น", pos: XY(0, 0) },
    { label: "14. ปั๊มคลินต้น", pos: XY(0, 0) },
    { label: "15. สนามม้า", pos: XY(0, 0) },
    { label: "16. แลนด์ชมพู", pos: XY(0, 0) },
    { label: "17. ปั๊มหัวใจ", pos: XY(0, 0) },
    { label: "18. ตัดผมหัวใจ", pos: XY(0, 0) },
    { label: "19. รางน้ำหัวเขื่อน", pos: XY(0, 0) },
    { label: "20. สนามบอล", pos: XY(0, 0) },
    { label: "21. สะพานสนามบอล", pos: XY(0, 0) },
    { label: "22. หมายาว", pos: XY(0, 0) },
    { label: "23. อู่ฟ้า", pos: XY(0, 0) },
    { label: "24. หลังแลนด์เขียว", pos: XY(0, 0) },
    { label: "25. แลนด์เขียว", pos: XY(0, 0) },
    { label: "26. ร้านเสื้อผ้าแลนด์เขียว", pos: XY(0, 0) },
    { label: "27. เส้นบูสตกแมพ", pos: XY(0, 0) },
    { label: "28. ร้านทำผมแลนด์เขียว", pos: XY(0, 0) },
    { label: "29. อุโมงพารากอน", pos: XY(0, 0) },
    { label: "30. พารากอน", pos: XY(0, 0) },
    { label: "31. กสิกรพาวประชาชน", pos: XY(0, 0) },
    { label: "32. พาวน์ประชาชน", pos: XY(0, 0) },
    { label: "33. หลัง รพ.กลาง", pos: XY(0, 0) },
    { label: "34. รพ.กลาง", pos: XY(0, 0) },
    { label: "35. ตึกทรู", pos: XY(0, 0) },
    { label: "36. ตึกผู้หญิง", pos: XY(0, 0) },
    { label: "37. จกแคป", pos: XY(0, 0) },
    { label: "38. แยกมอนิ่งวด", pos: XY(0, 0) },
    { label: "39. โค้งเบย์ซิตี้", pos: XY(0, 0) },
    { label: "40. เบย์ซิตี้", pos: XY(0, 0) },
    { label: "41. จุดซ่อมรถมอนิ่งวูด", pos: XY(0, 0) },
    { label: "42. แยกหน้าสวนสนุก", pos: XY(0, 0) },
    { label: "43. ซอยโซ่", pos: XY(0, 0) },
    { label: "44. หน้าตึกรุ้ง", pos: XY(0, 0) },
    { label: "45. โรงถ่ายหนัง", pos: XY(0, 0) },
    { label: "46. ฟรีเวย์ตึกรุ้ง", pos: XY(0, 0) },
    { label: "47. เห็นขยะ", pos: XY(0, 0) },
    { label: "48. รอยแตกขยะ", pos: XY(0, 0) },
    { label: "49. สามแยกพารากอน", pos: XY(0, 0) },
    { label: "50. ฟรีเวย์หลงไหล", pos: XY(0, 0) },
    { label: "51. ตึกหลงไหล", pos: XY(0, 0) },
    { label: "52. เปลี่ยนนามสกุล", pos: XY(0, 0) },
    { label: "53. 180", pos: XY(0, 0) },
    { label: "54. เห็นระเบิด", pos: XY(0, 0) },
    { label: "55. รอยแตกตะแกรง", pos: XY(0, 0) },
    { label: "56. จกปูนหัวใจ", pos: XY(0, 0) },
    { label: "57. สามแยกแลนด์ขาว", pos: XY(0, 0) },
    { label: "58. แลนด์ขาว", pos: XY(0, 0) },
    { label: "59. ไต่ตะแกรง", pos: XY(0, 0) },
    { label: "60. เห็นถังขาว", pos: XY(0, 0) },
    { label: "61. รพ. เก่า", pos: XY(0, 0) },
    { label: "62. เส้น รพ.เก่า", pos: XY(0, 0) },
    { label: "63. อุโมงค์ดารา", pos: XY(0, 0) },
    { label: "64. ไฮพาวเวอร์", pos: XY(0, 0) },
    { label: "65. อาคาเดียส", pos: XY(0, 0) },
    { label: "66. หลังตึกแดง", pos: XY(0, 0) },
    { label: "67. ปูนเดี่ยว", pos: XY(0, 0) },
    { label: "68. หลังตึกขาว", pos: XY(0, 0) },
    { label: "69. สี่แยกตึกรุ้ง", pos: XY(0, 0) },
    { label: "70. ร้านแดง", pos: XY(0, 0) },
    { label: "71. สวนสนุก", pos: XY(0, 0) },
    { label: "72. ร้านหน้ากาก", pos: XY(0, 0) },
    { label: "73. แยกโพเหล็ก", pos: XY(0, 0) },
    { label: "74. โพเหล็ก", pos: XY(0, 0) },
    { label: "75. บ้านน้ำ", pos: XY(0, 0) },
    { label: "76. ศาลาแดง", pos: XY(0, 0) },
    { label: "77. ปั๊มลิตเติลโซล", pos: XY(0, 0) },
    { label: "78. ตึกเตี้ย", pos: XY(0, 0) },
    { label: "79. ตึกขาว", pos: XY(0, 0) },
    { label: "80. ปูนแตกขาว", pos: XY(0, 0) },
    { label: "81. ตึกแดง", pos: XY(0, 0) },
    { label: "82. โลวพาวเวอร์", pos: XY(0, 0) },
    { label: "83. ดาราโซน", pos: XY(0, 0) },
    { label: "84. ร้านเสื้อผ้า สน.", pos: XY(0, 0) },
    { label: "85. สะพานร้านเสื้อผ้า สน.", pos: XY(0, 0) },
    { label: "86. ปั๊มหลัง สน.", pos: XY(0, 0) },
    { label: "87. ร้านเอลรันโซ่", pos: XY(0, 0) },
    { label: "88. ไต่ดอม", pos: XY(0, 0) },
    { label: "89. รางน้ำ 24", pos: XY(0, 0) },
    { label: "90. โอลิมปิก", pos: XY(0, 0) },
    { label: "91. สะพานข้าง สน.", pos: XY(0, 0) },
    { label: "92. รางน้ำหลัง สน.", pos: XY(0, 0) },
    { label: "93. สน.", pos: XY(0, 0) },
    { label: "94. ที่ทำการ", pos: XY(0, 0) },
    { label: "95. ตึกปืน", pos: XY(0, 0) },
    { label: "96. คาร์ดีลเลอร์", pos: XY(0, 0) },
    { label: "97. เคนเหลือง", pos: XY(0, 0) },
    { label: "98. แลนด์เหลือง", pos: XY(0, 0) },
    { label: "99. ตึกปูนปิด", pos: XY(0, 0) },
    { label: "100. จกปูนแตก", pos: XY(0, 0) },
    { label: "101. เห็นใหญ่", pos: XY(0, 0) },
    { label: "102. โม่ปูน", pos: XY(0, 0) },
    { label: "103. ไฮเวย์ฝั่งตึกปืน", pos: XY(0, 0) },
    { label: "104. เหินสไปร์ท", pos: XY(0, 0) },
    { label: "105. ไฮเวย์ข้าง สน.", pos: XY(0, 0) },
    { label: "106. เห็นกระดก", pos: XY(0, 0) },
    { label: "107. ตึกปูนข้าง รพ.", pos: XY(0, 0) },
    { label: "108. ปั๊มข้าง รพ.", pos: XY(0, 0) },
    { label: "109. ร้านอินโนเซ็น", pos: XY(0, 0) },
    { label: "110. อู่เป็นนี่", pos: XY(0, 0) },
    { label: "111. ไต่ป้าย", pos: XY(0, 0) },
    { label: "112. ปั๊มลุงฟ้า", pos: XY(0, 0) },
    { label: "113. หลังแลนด์ม่วง", pos: XY(0, 0) },
    { label: "114. แลนด์ม่วง", pos: XY(0, 0) },
    { label: "115. เห็นโอเวอร์", pos: XY(0, 0) },
    { label: "116. ท่าเรือแลนด์ม่วง", pos: XY(0, 0) },
    { label: "117. หญ้าโอเวอร์", pos: XY(0, 0) },
    { label: "118. บ้านแรงค์", pos: XY(0, 0) },
    { label: "119. ปั๊มโอยะ", pos: XY(0, 0) },
    { label: "120. รพ.หลัก", pos: XY(0, 0) },
    { label: "121. สามแยกรางน้ำ", pos: XY(0, 0) },
    { label: "122. ปั๊มนับดับเพลิง", pos: XY(0, 0) },
    { label: "123. นับดับเพลิง", pos: XY(0, 0) },
    { label: "124. สี่แยกซัสแทนเซีย", pos: XY(0, 0) },
    { label: "125. ฟรีเวย์อุตสาหกรรม", pos: XY(0, 0) },
    { label: "126. สะพานอุตสาหกรรม", pos: XY(0, 0) },
    { label: "127. จกปูนป๊อปปูล่า", pos: XY(0, 0) },
    { label: "128. สี่แยกป๊อปปูล่า", pos: XY(0, 0) },
    { label: "129. พาวน์หน่วยงาน", pos: XY(0, 0) },
    { label: "130. สามแยกสี่แทงก์", pos: XY(0, 0) },
    { label: "131. ร้านตัดผมแลนด์ส้ม", pos: XY(0, 0) },
    { label: "132. แลนด์ส้ม", pos: XY(0, 0) },
    { label: "133. ซอยฟอร์รั่ม", pos: XY(0, 0) },
    { label: "134. เห็นอักษร", pos: XY(0, 0) },
    { label: "135. รางน้ำโอยะ", pos: XY(0, 0) },
    { label: "136. ไฮเวย์โรงเหล็ก", pos: XY(0, 0) },
    { label: "137. โรงเหล็ก", pos: XY(0, 0) },
    { label: "138. หน้าสเตเดี่ยม", pos: XY(0, 0) },
    { label: "139. อีโค่", pos: XY(0, 0) },
    { label: "140. ปั๊มเดวิด", pos: XY(0, 0) },
    { label: "141. บ้านCJ", pos: XY(0, 0) },
    { label: "142. เส้นดัชลอนดอน", pos: XY(0, 0) },
    { label: "143. สี่แทงก์", pos: XY(0, 0) },
    { label: "144. แยกสี่แทงก์", pos: XY(0, 0) },
    { label: "145. โพเหมือง", pos: XY(0, 0) },
    { label: "146. เขาน้ำมัน", pos: XY(0, 0) },
    { label: "147. พระราม9", pos: XY(0, 0) },
    { label: "148. แยกโกดังท่าเรือ", pos: XY(0, 0) },
    { label: "149. สะพานเขียว", pos: XY(0, 0) },
    { label: "150. ลานจอดสเตเดี้ยม", pos: XY(0, 0) },
    { label: "151. เหินดินสเตเดี้ยม", pos: XY(0, 0) },
    { label: "152. ปลาหมึก", pos: XY(0, 0) },
    { label: "153. แยกปลาหมึก", pos: XY(0, 0) },
    { label: "154. หญ้าDOV", pos: XY(0, 0) },
    { label: "155. เหินDOV", pos: XY(0, 0) },
    { label: "156. แยกบูสลม", pos: XY(0, 0) },
    { label: "157. พระราม8", pos: XY(0, 0) },
    { label: "158. ปั๊มลับท่าเรือ", pos: XY(0, 0) },
    { label: "159. จกปูนชุม", pos: XY(0, 0) },
    { label: "160. แยกวูดู", pos: XY(0, 0) },
    { label: "161. โกดังท่าเรือ", pos: XY(0, 0) },
    { label: "162. แลนด์ท่าเรือ", pos: XY(0, 0) },
    { label: "163. จกปูนวูดู", pos: XY(0, 0) },
    { label: "164. โกดังสนามบิน", pos: XY(0, 0) },
    { label: "165. ตึกปูนสนามบิน", pos: XY(0, 0) },
    { label: "166. แลนด์มิ้นต์", pos: XY(0, 0) },
    { label: "167. หลังแลนด์มิ้นต์", pos: XY(0, 0) },
    { label: "168. ปั๊มร้าง", pos: XY(0, 0) },
];


const markers = []; // ✅ ประกาศนอกลูปให้ใช้ได้ทั่ว
const buttonContainer = document.getElementById("button-container"); // <div> ที่จะใส่ปุ่มไว้

for (let i = 0; i < locations.length; i++) {
    const { pos, label } = locations[i];
    const marker = L.marker(pos, { icon: customIcon(i + 1) })
        .addTo(Icons["Example"])
        .bindPopup(label);
    markers.push(marker);
}
const container = document.getElementById("container");

for (let i = 0; i < locations.length; i++) {
    const div = document.createElement("div");
    div.className = "box-test";
    div.id = (i + 1).toString();
    div.textContent = locations[i].label;
    container.appendChild(div);
}

document.querySelectorAll(".box-test").forEach(el => {
    el.addEventListener("click", () => {
        const id = parseInt(el.id); // สมมุติ id="1"
        const marker = markers[id - 1];
        if (marker) {
            marker.openPopup();
            map.setView(marker.getLatLng(), 17); // ← ถ้าต้องการให้กล้องเลื่อนไป
        }
    });
});

document.querySelector('.header-input').addEventListener('input', function () {
    const query = this.value.toLowerCase();

    document.querySelectorAll('.box-test').forEach(function (item) {
        const itemName = item.querySelector('.box-test').textContent.toLowerCase();
        if (itemName.includes(query)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});