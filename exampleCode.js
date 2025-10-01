const credit = `"""
@ppython_basic
author : Ppython Basic
name : wk18k
"""`;
const ExampleCode = [
  {
    label: "----- บทที่ 1 -----",
    example: `${credit}
"""
บทที่ 1 🥳🥳
"""`,
  },
  {
    label: "สวัสดี Python",
    example: `${credit}
print("PPython Basic")`,
  },
  {
    label: "การประกาศตัวแปรชนิด string (str)",
    example: `${credit}
my_name = "สมัย"
addr = "60 หมู่ 9"
tel = "098-857-456-1"

# : str ไม่มีผลกับโค้ดจะใส่หรือไม่ใส่ก็ได้
game_name : str = "Minecraft"
year : str = "2018"
publisher : str = "Microsoft"

print(my_name)
print(addr)
print(tel)
print(game_name, year, publisher)
`,
  },
  {
    label: "การเชื่อมต่อ string",
    example: `${credit}

prefix : str = "นาย"
name : str = "สมัย"

# ข้อความบวกกันจะเป็นการต่อข้อความ เช่น ไก่+ไข่ = ไก่ไข่
full_name : str = prefix + name
    
print(full_name)
    `,
  },
  {
    label: "การประกาศตัวแปรชนิด integer (int)",
    example: `${credit}
number_weather = -5
zero = 0
x_number = 3
y_number = 100


print(number_weather)
print(zero)
print(x_number)
print(y_number)

# : int ไม่มีผลกับโค้ดจะใส่หรือไม่ใส่ก็ได้
x_number : int = 4
y_number : int = 150

print(x_number + y_number)
      `,
  },
  {
    label: "การประกาศตัวแปรชนิด float (float)",
    example: `${credit}
temp = 26.43
zero = 0.0
pi_number = 3.14
number_max = 100.0

# : float ไม่มีผลกับโค้ดจะใส่หรือไม่ใส่ก็ได้
temp : float = 26.43

print(temp + 0.54)
        `,
  },
  {
    label: "การตกแต่งจุดทศนิยม (round)",
    example: `${credit}
num_float : float = 26.433421

# ตัดจุดทศนิยมออกให้เหลือแค่จำนวนเต็ม
num_int : int = round(num_float)

print("Before ",num_float)
print("After ",num_int)

print()

# ตัดจุดทศนิยมออกให้เหลือแค่ 2 ตำแหน่ง
num_two_point : float = round(num_float, 2 )
print("Before ",num_float)
print("After ",num_two_point)
        `,
  },
  {
    label: "การประกาศตัวแปรชนิด boolean (bool)",
    example: `${credit}

# : bool ไม่มีผลกับโค้ดจะใส่หรือไม่ใส่ก็ได้
status_play : bool = True
status_game : bool = False

print("status_play",status_play)
print("status_game",status_game)
`,
  },
  {
    label: "การตรวจสอบชนิดข้อมูล (type)",
    example: `${credit}
number = 213
name = "Jame"
pi_value = 3.14

# type() คือคำสั่งที่ใช้ในการตรวจสอบชนิดของตัวแปรหรือชนิดของข้อมูลที่อยู่ในตัวแปร
check_type_number = type(number)

print(check_type_number)

# เขียนแบบรวดเร็ว
print(type(name))
print(type(pi_value))`,
  },
  {
    label: "การแปลงชนิดข้อมูล (convert type)",
    example: `${credit}

# แปลงจาก string ให้เป็น integer
year = "2023"
print("Before ",year,year+year,type(year))
year = int(year)
print("After ",year,year+year,type(year))

# แปลงจาก integer ให้เป็น string
age = 35
print("Before ",age,age+age,type(age))
age = str(age)
print("After ",age,age+age,type(age))

# และยังมี float() แปลงจากให้เป็นทศนิยม 
`,
  },
  {
    label: "การรับข้อมูลเข้ามาจากคีย์บอร์ด (input)",
    example: `${credit}

# input() คือการรับข้อมูจากแป้นพิมพ์เข้ามาในโปรแกรม
name : str = input("Enter name : ")
print(name)`,
  },
  {
    label:
      "การรับข้อมูลเข้ามาจากคีย์บอร์ดและตรวจสอบชนิดข้อมูล (check type input)",
    example: `${credit}
    
number : int = input("Enter number : ")
print(type(number))`,
  },
  {
    label:
      "การรับข้อมูลเข้ามาจากคีย์บอร์ดและแปลงชนิดข้อมูล (convert type input)",
    example: `${credit}
        
number : int = input("Enter number : ")
number_new : int = int(number)
print(number_new + 10)`,
  },
  {
    label: "การแสดงผลข้อมูลผ่าน Console (print)",
    example: `${credit}

# print() ในภาษาโปรแกรมส่วนใหญ่ใช้เพื่อแสดงเอาต์พุตหรือข้อมูลบนคอนโซลหรือเทอร์มินัล
print(12)
print(23)
print(34)

# เปลี่ยนจากเดินที่ขึ้นบรรทัดใหม่ให้ต่อท้ายโดยไม่ขึ้นบรรทัดใหม่
print(12,end="")
print(23)

# การจัดตำแหน่งการแสดงผลข้อมูลของ print()
print("เมื่อวาน".center(40, "🌍")) # .center กึ่งกลาง (ความกว้าง, "🌍")
print("ไม่ใช่วันนี้".rjust(40, "▶"))  # .rjust  ชิดขวา  (ความกว้าง, "▶")
print("และวันนี้".ljust(40, "◀"))   # .ljust  ชิดซ้าย  (ความกว้าง, "◀")

# การแสดงผลข้อมูลแบบรวบเดียวใน print()
name = "Nicolas"
age = 15
born = 1982
print("My name is",name," and ",age,"year old","born ",born)
# หรืออีกแบบ
print("My name is " + name + " and " + str(age) + "year old" + "born " + str(born)) 
# หากจะใช้แบบนี้ตัวแปรใดที่เป็นชนิด int ต้องเป็นเป็น str ก่อนเสมอ และเว้นวรรคจะต้องแบ่งเอง
`,
  },
  {
    label: "----- งานบทที่ 1  -----",
    example: `${credit}`,
  },
  {
    label: "ข้อที่ 1",
    example: `${credit}

"""
สร้างตัวแปรตามชนิด str,int,float,bool มาอย่างละ 3 ตัวแปร โดยให้ชื่อตัวแปรสอดคล้องกับข้อมูลที่สร้างขึ้นและ print() แสดงผลออกมาทั้งหมด

ลิงก์สำหรับ Fork : https://replit.com/team/ppython-basic/prac1var
"""

# str 3 ตัว



# int 3 ตัว



# float 3 ตัว



# bool 3 ตัว



# print() 12 ตัว
print()
print()
print()
`,
  },
  {
    label: "ข้อที่ 2",
    example: `${credit}
    
"""
สร้าตัวแปรชื่อ width กับ height ทำการรับ input() จากผู้ใช้งานเข้ามาแล้วนำมารวมกัน จากนั้นแสดงผลข้อมูลออกมา ให้แสดงออกมาดังนี้

Enter width: 50
Enter height: 30
ผลลัพธ์ของ width 50 ซม และ height 30 ซม คือ sum 80 ซม

ลิงก์สำหรับ Fork : https://replit.com/team/ppython-basic/prac1input
"""
# ตัวอย่างผลลัพธ์แค่ตัวอย่างไม่เกี่ยวกับโค้ดของคุณ
print(example_width_height())

`,
  },
  {
    label: "ข้อที่ 3",
    example: `${credit}
        
"""
กำหนดให้ตัวแปร text = "มีชีวิตชีวาหน่อยสิ" จากให้แสดงผลข้อความออกมาทั้งหมด 50 ครั้ง

ปล.เพื่อเพิ่มความเข้าใจของคุณลองเอา str * 10 ดูก็หน่อยสิและนั่นจะเป็นแนวทางในการทำ

ลิงก์สำหรับ Fork : https://replit.com/team/ppython-basic/prac1print
"""

# let's go
    `,
  },
  {
    label: "ข้อที่ 4",
    example: `${credit}
            
"""
กำหนดให้ text = "สำเร็จ" จากนั้น print() ออกมาให้อยู่กึ่งกลาง

ลิงก์สำหรับ Fork : https://replit.com/team/ppython-basic/prac1center
"""

# let's go`,
  },
  {
    label: "ข้อที่ 5",
    example: `${credit}
                
"""
รับ input จากผู้ใช้งานโดยให้กรอกชื่อเข้ามาในโปรแกรม จากนั้นทำการ print() ออกมาเป็นข้อความ Hi , ชื่อของผู้ใช้ที่กรอกเข้ามา

ลิงก์สำหรับ Fork : https://replit.com/team/ppython-basic/prac1inputname
"""
# ตัวอย่างผลลัพธ์
print(example_input_name())

# let's go`,
  },
  {
    label: "ข้อที่ 6",
    example: `${credit}
                
"""
เขียนโปรแกรม รับตัวเลขสองตัวจากผู้ใช้ จากนั้นทำการ print ผลบวกของทั้งสองข้อมูลนี้ออกมา

ลิงก์สำหรับ Fork : https://replit.com/team/ppython-basic/prac1inputnumber
"""
# ตัวอย่างผลลัพธ์
print(example_input_number())

# let's go`,
  },
  {
    label: "ข้อที่ 7",
    example: `${credit}
                
"""
เขียนโปรแกรมโดยทำการถามอายุผู้ใช้งานและบอกว่าอีก 10 ปีผู้ใช้งานจะมีอายุเท่าไหร่

ลิงก์สำหรับ Fork : https://replit.com/team/ppython-basic/prac1calyear
"""
# ตัวอย่างผลลัพธ์
print(example_input_year())

# let's go`,
  },
  {
    label: "----- บทที่ 2 -----",
    example: `${credit}
"""
บทที่ 2 🔥🔥
"""`,
  },
  {
    label: "การประกาศตัวแปรชนิด list (list)",
    example: `${credit}

# ตัวแปรชนิด list สามารถเพิ่ม ลบ แก้ไขข้อมูลได้

# : list ไม่มีผลกับโค้ดจะใส่หรือไม่ใส่ก็ได้
fruits : list = ["apple", "banana", "cherry"]
numbers : list = [1, 2, 3, 4 , 5 , 6 , 7 , 8]
print(fruits)
print(numbers)`,
  },
  {
    label: "การประกาศตัวแปรชนิด tuple (tuple)",
    example: `${credit}
# ตัวแปรชนิด tuple ไม่สามารถเพิ่ม ลบ แก้ไขข้อมูลได้
# : tuple ไม่มีผลกับโค้ดจะใส่หรือไม่ใส่ก็ได้
coordinates : tuple = (23, 45, 67)
color_green : tuple = (0, 255, 0)
print(coordinates)
print(color_green)`,
  },
];
