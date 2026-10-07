import prisma from "@/lib/prisma";

// fuction API: POST (Create) เพิ่มข้อมูลตาราง products
export async function POST(req: Request) {
  // เอาข้อมูลที่ส่งมาที่จะเอาไปบันทึกลง table ซึ่งเป็นข้อมูล JSON เราจะเอามาใส่ในตัวแปรเพื่อใช้งาน
  const body = await req.json();
  // เอาข้อมูลที่ได้จาก body ไปบันทึกลง table products
  const product = await prisma.products.create({
    data: {
      name: body.name,
      description: body.description,
      price: body.price,
      quantity: body.quantity,
    },
  });
  // ส่งผลการทำงานกลับไปยัง client-user
  return Response.json(product, {
    status: 201,
  });
}

// function API: GET (Read) ดึงข้อมูลทั้งหมดจากตาราง products
export async function GET(req: Request) {}

// function API: PUT (Update) แก้ไขข้อมูลในตาราง products
export async function PUT(req: Request) {}

// function API: DELETE (Delete) ลบข้อมูลในตาราง products
export async function DELETE(req: Request) {}
