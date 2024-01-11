import Footer from '@/app/component/Footer'
import { galleryImg } from '@/app/component/GaleryFiles';
import Navbar from '@/app/component/Navbar';

function Page() {
  const firstPageImgs = galleryImg.filter((item) => item.id <= 8);
  return (
    <>
    <Navbar/>
    <section className="">
    <div className="login-banner relative justify-center flex">
      <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
        Gallery
      </h1>
    </div>
    <div className="container page-padding py-[10rem]">
    <div className="grid grid-cols-3 gap-7 md1000:grid-cols-2 min540:grid-cols-1">
        {firstPageImgs.map((image) => (
          <div key={image.id}>
            <img alt="gallery_img" className="w-full h-auto" src={image.img} />
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </section>
  </>
  )
}

export default Page