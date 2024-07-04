[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/GHgnsbI8)
# Lab 05 : The Joy of pure TypeScript/JavaScript Part 2

### ป้อนข้อมูลนักศึกษา

รหัส นศ.:

ชื่อ-สกุล :

ให้ นศ.เขียนโปรแกรมโดยใช้ Node.js + TypeScript ตามคำสั่งของโจทย์ในข้อต่าง ๆ ตามรายละเอียดด้านล่างนี้

[คลิกเพื่อดูรายละเอียด](https://o365cmu-my.sharepoint.com/:b:/g/personal/dome_potikanond_cmu_ac_th/EdbqVdbsE_xPu3xo_zDgZ0ABjOObN6EbsNusQDQVe6mdLg?e=gl7PTn)

---

### คำอธิบายเกี่ยวกับการใช้งาน TypeScript

หากในโปรเจคโฟลเดอร์ยังไม่มี `package.json` ให้ initialize project ด้วยการ**รันคำสั่งต่อไปนี้ภายในโปรเจคโฟลเดอร์**

```bash
$ npm init -y
```

หากโปรเจคมี `package.json` แล้วให้ติดตั้ง package ต่าง ๆ ที่เป็น `dependencies` ของโปรเจคด้วยคำสั่ง

```bash
$ npm i
```

Package ที่ต่าง ๆ ที่ติดตั้งอาจมีการออกเวอร์ชันใหม่ ๆ ที่ได้รับการแก้ไขข้อบกพร่อง เพิ่มความสามารถ และอุดช่องโหว่ด้านความปลอดภัย โดยเราสามารถอัพเดต package เหล่านี้ให้เป็นเวอร์ชันล่าสุดด้วยคำสั่ง

```bash
$ npm update
```

สำหรับการใช้ TypeScript ในครั้งนี้ ให้ติดตั้ง package ต่อไปนี้ ด้วยคำสั่งด้านล่าง

- `TypeScript` : เพื่อให้สามารถเขียนโค้ด TypeScript ในโปรเจคนี้
- `@types@node` : เพื่อเพิ่มข้อมูล Type definition ให้ node.js
- `ts-node` เพื่อให้สามารถรันโค้ด TypeScript ได้ในขั้นตอนเดียวด้วยคำสั่ง `ts-node`

```bash
# install package as dependencies
$ npm i typescript ts-node

# install package as development dependencies, available only in development environment.
$ npm i -d @types/node
```

สร้างไฟล์ `tsconfig.json` เพื่อกำหนดค่าการทำงานให้ **TypeScript** ของโปรเจคนี้ โดยการรันคำสั่งต่อไปนี้ภายในโฟลเดอร์ของโปรเจค

```bash
$ tsc --init
```

แก้ไขค่าในไฟล์ `tsconfig.json` ในส่วนของ **`compilerOptions`** ดังต่อไปนี้

```json
"target": "es2016"        // output script version
"rootDir": "./"           // sourcecode directory (ค้นหาไฟล์ *.ts ในโฟลเดอร์ใด)
"outDir": "./"            // output directory (บันทึกไฟล์ *.js ที่เป็นผลลัพธ์ในโฟลเดอร์ใด)
"removeComments": false    // remove comments
"noEmitOnError": true     // don't emit if there is an error
```

เมื่อต้องการรัน `filename.ts` เราสามารถทำการแปลงโค้ด TypeScript เป็น JavaScript และสั่งรันในขั้นตอนเดียว ได้ด้วยคำสั่ง

```bash
# ในกรณีที่ติดตั้ง ts-node ด้วยคำสั่ง 'npm i -g ts-node'
$ ts-node <filename.ts>
```

หรือ

```bash
# ในกรณีที่ติดตั้ง ts-node ด้วยคำสั่ง 'npm i ts-node' หรือ 'npm i -d ts-node'
$ npx ts-node <filename.ts>
```

หากต้องการแปลงโค้ด TypeScript เป็น JavaScript ด้วยคำสั่ง

```bash
# ในกรณีที่ติดตั้ง typescript ด้วยคำสั่ง 'npm i -g typescript'
$ tsc <filename.ts>
```

หรือ

```bash
# ในกรณีที่ติดตั้ง typescript ด้วยคำสั่ง 'npm i typescript' หรือ 'npm i -d typescript'
$ npx tsc <filename.ts>
```

แล้วทำการรันไฟล์ JavaScript ด้วยคำสั่ง

```bash
$ node <filename.js>
```
