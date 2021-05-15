import Head from 'next/head'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Анвар Хакимов — Руководитель проектов"
        description="Senior Project Manager"
        openGraph={{
          url: "https://anvarkhakimov.ru",
          title: "Анвар Хакимов — Руководитель проектов",
          description: "Senior Project Manager",
          type: "website",
          images: [{ url: 'https://static.tildacdn.com/tild6234-3830-4465-a565-643765613336/-/resize/504x/_243.jpg' }]

        }}
      />
      <div className="grid grid-cols-7 gap-4">
        <div className="col-start-2 col-span-4 pt-14 ">
          <Image
            src="/images/avatar.jpg"
            width={260}
            height={260}
            className="rounded-full"
          />
        </div>
        <div className="col-start-2 col-span-5 md:col-start-2 md:col-span-4">
          <div className="text-3xl md:text-5xl my-10">
            <h1 className="font-semibold">Анвар Хакимов, <span className="font-extralight">руководитель проектов</span></h1>
          </div>
          <div className="">
            <p>Меня зовут Анвар, я управляю проектами 7 лет.</p>
            <br />
            <p>Обладаю опытом запуска успешных проектов в разных сферах бизнеса (Туризм, Образование, IT) и организации работы географически распределенных команд (Россия, Украина, Европа).</p>
            <br />
            <p>Чтобы связаться со мной по вопросам сотрудничества, напишите на почту или в телеграмм.</p>
            <br />
          </div>
          <div className="text-lg mb-10">
            Контакты:
              <ul className="list-disc list-inside">
              <li>argood42 @ gmail.com</li>
              <li>tg: @anvarKhakimov</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
