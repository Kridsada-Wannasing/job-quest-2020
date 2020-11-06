# Back-end Questions

### 1. Explain First-party cookie & Third-party cookie

- First-party cookie เป็น cookie ที่ทำหน้าเก็บข้อมูลการเข้าใช้งานของเราในเว็บไซต์นั้นๆ ถูกสร้างโดยเจ้าของเว็บไซต์นั้นๆ
- Third-party cookie เป็น cookie ที่ถูกสร้างขึ้นจากบุคคลที่ 3 เช่น facebook google taboola ที่ถูกฝังไว้ในบนเว็บไซต์ต่างๆ ทำหน้าติดตามการใช้งานบนเว็บไซต์ของผู้ใช้

### 2. Explain CAP Theorem

เป็นทฤษฎีที่ถูกนำมาใช้ในการเลือกใช้งาน Database ตามความเหมาะสมของงาน โดย Database จะสามารถมีคุณสมบัติได้เพียง 2 ใน 3 คุณสมบัติเท่านั้นคือ

- C – Consistency หมายถึง ทุกครั้งที่อ่านข้อมูลจาก Database จะได้ผลลัพท์ล่าสุด หรือไม่ก็ Error เท่านั้น
- A – Availability หมายถึง ทุกครั้งที่มีการขอข้อมูลจาก Database จะได้ข้อมูลกลับมาเสมอ ภายในระยะเวลาที่สมเหตุสมผล
- P – Partition tolerance หมายถึง หากมี Network หรือ Node ใด Node หนึ่งใน Database เสีย ระบบยังสามารถทำงานต่อได้

### 3. Considering two queries

```javascript
const searchIds = ['1', '2', '3', ...];

const query1 = await Product.find({ id: { $in: searchIds } });

const query2 = await Promise.all(searchIds.map(searchId => Product.find({ id: searchId })));
```

Which one is faster.

แบบที่ 1

```javascript
const query1 = await Product.find({ id: { $in: searchIds } });
```

### 4.Explain XSS / SQL Injection / Man in the Middle Attack, and how to prevent each attack type.

- XSS เป็นการโจมตีช่องโหว่ของเว็บแอปพลิเคชัน ที่สามารถแทรกคำสั่ง script เช่น html หรือ javascript เข้าไปในหน้าเว็บได้ โดยเมื่อผู้ไม่หวังดีจะทำการสร้าง script ฝังเข้าไปใน server เพื่อไปเอาข้อมูลสำคัญหรือทำลายข้อมูลใน Database และเมื่อผู้ใช้มีการโหลดหน้าเว็บ script ก็จะทำงาน
  วิธีการป้องกันคือ
  1.เปิดใช้งาน Content Security Policy (CSP) เป็นมาตรการที่ช่วยป้องกันหรือบรรเทาความรุนแรงของการโจมตีแบบ Cross-site Scripting (XSS) และ Data Injection
  2.เลือกใช้ framework ในการพัฒนาแอปพลิเคชัน
  3.ใช้การ encoding เมื่อมีการแก้ไขข้อมูลใน DOM
  4.หลีกเลี่ยง Request Data ต่างๆที่จะออกไปแสดงผล ในรูปแบบ HTML Output ต่างๆ เช่น body, attribute, JavaScript, CSS, or URL

- SQL Injection เป็นเทคนิคที่ใช้ประโยชน์จากส่งคำสั่ง SQL ผ่านทางเว็บแอพพลิเคชันเพื่อไปโจมตีระบบฐานข้อมูลหลังบ้าน โดยอาศัยช่องโหว่ของการใส่ข้อมูล input ของผู้ใช้ที่สามารถตรวจสอบรูปแบบการโจมตีได้อย่างจำกัด
  วิธีการป้องกันคือ
  1.ทำ input validation
  2.ใช้ Prepared Statement

- Man in the Middle Attack คือ การที่มีผู้ไม่หวังดีเข้ามาแทรกกลางในการสนทนาระหว่างคน 2 คน แล้วทำหน้าที่เป็นตัวกลางในการรับส่งข้อมูลของคู่สนทนา โดยที่คู่สนทนาไม่สามารถทราบได้ว่ามีผู้อื่นเป็นผู้รับและส่งสารต่อกับคู่สนทนาของตนอยู่ ทำให้ผู้ไม่หวังดีสามารถใช้รูปแบบการโจมตีในลักษณะนี้ในการดักรับหรือเปลี่ยนแปลงข้อมูลที่ทั้ง 2 ฝั่งสื่อสารกันอยู่ได้
  วิธีการป้องกัน 1.ทำการเข้ารหัสลับข้อมูลก่อนที่จะส่งออกไป 2.ตรวจสอบความถูกต้องของใบรับรองของเว็บไซต์ทุกครั้งที่ต้องทำธุรกรรมทางอิเล็กทรอนิกส์

### 5.Explain the different between using callback / Promise / async await. When to use and when not to.

- Callback Fucntion หมายถึง function ที่จะถูกเรียก หลังจาก function อื่นๆ ทำงานเสร็จ ซึ่งในบางกรณีอาจมี callback function ซ้อนใน callback function และซ้อนในอีก callback function เกิดเป็น callback hell ขึ้นมาได้ จึงเหมาะกับ callback function ที่มีการซ้อนของ function ที่ไม่เยอะมาก
- Promise เป็น Object พิเศษของ javascript ที่มาช่วยแก้ปัญหาใน callback hell ของ callback function มี 3 สถานะคือ pending resolve และ reject โดยเมื่อเริ่มต้นทำคำสั่ง ตัว promise จะมีสถานะเป็น pending เมื่อทำสั่งสำเร็จ จะมีสถานะเป็น resolve ซึ่งจะทำงานในคำสั่งถัดไปที่อยู่ใน .then() หากไม่สำเร็จ จะมีสถานะเป็น reject และทำคำสั่งถัดไปที่อยู่ใน .catch() แทน แต่ปัญหาของ Promise ก็คือ การดักจับค่า error ที่ถึงแม้จะมี .catch() แต่ในกรณีที่มีการทำ Promise chain หลายๆ ครั้ง เราจะไม่รู้ว่า .catch() นั้นเป็นของ Promise ตัวไหน
- Async/Await เป็น keyword ที่จะกำหนดการทำงานให้เป็นแบบ Asynchronous โดยจะคืนค่ากลับมาเป็น Promise ซึ่งสามารถจัดการกับ error ได้ง่ายขึ้น โดยใช้ try/catch ในการดักจับ error ได้เลย
- ทั้ง Promise และ Async/Await สามารถใช้สลับแทนกันได้เสมอ

### 6.Explain how HTTP protocol works.

- เปิดการเชื่อมต่อระหว่าง client และ server
- client ส่ง Request ไปยัง server เพื่อขอ resource จาก server
- server ตีความและประมวลผลคำสั่งจาก client และส่ง response ที่เป็น resource ที่ต้องการกลับไปยัง client
- server ปิดการเชื่อมต่อกับ client หลังจากส่ง response สำเร็จ
