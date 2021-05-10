import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head></Head>
      <body className="container mx-auto mx-40 font-sans font-light global">
        <div class="grid grid-cols-6 gap-4">
          <div class="col-start-2 col-span-4 pt-14 ">
            <Image
              src="/images/avatar.jpg"
              width={260}
              height={260}
              className="rounded-full"
            />
          </div>
          <div class="col-start-2 col-span-4">
            <div className="md:text-5xl sm:text-3xl my-10">
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
                <li>почта</li>
                <li>телеграм</li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}
