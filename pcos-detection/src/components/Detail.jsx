import React from 'react'
import { useParams } from 'react-router-dom';
const subDetails = [
    {
        id:1,
        coverImg:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcontinentalhospitals.com%2Fblog%2Fpcos-and-its-related-conditions%2F&psig=AOvVaw1xR5-d3S6L8AfiSSZ58wv8&ust=1713244892832000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDn5Nu8w4UDFQAAAAAdAAAAABAK",
        title:"Causes ,Diagnostics and Symptoms",
        desc: "Polycystic Ovary Syndrome (PCOS) is a hormonal disorder affecting many women globally, with its roots believed to stem from a mix of genetic predisposition and environmental influences. While the precise causes remain elusive, factors such as insulin resistance, hormonal imbalances, and inflammation are thought to be key contributors. Diagnosing PCOS presents challenges due to its varied symptoms, including irregular menstrual cycles, elevated androgens, and ovarian cysts. A comprehensive approach involving medical history, physical exams, and blood tests is necessary for accurate diagnosis.PCOS manifests with a range of symptoms, from irregular periods and excessive hair growth to weight gain and fertility issues. Moreover, it can pose long-term health risks, such as insulin resistance and mental health concerns like depression and anxiety. Managing PCOS typically involves lifestyle adjustments such as diet and exercise, alongside medication to regulate hormones and improve fertility. A multidisciplinary approach, involving gynecologists, endocrinologists, and nutritionists, is pivotal for effective management and enhancing the quality of life for those with PCOS.",
    },
    {
        id:2,
        coverImg: "https://c.ndtvimg.com/2020-09/iv5hiclg_pcos_625x300_18_September_20.jpg",
        title: "Fertility",
        desc: "Fertility can be a significant concern for women with Polycystic Ovary Syndrome (PCOS). The hormonal imbalances characteristic of PCOS can disrupt ovulation, making it challenging to conceive. Irregular menstrual cycles and elevated levels of androgens can hinder the release of mature eggs from the ovaries, leading to infertility or difficulty in becoming pregnant. However, with appropriate management, many women with PCOS can improve their chances of conception. Lifestyle modifications, such as maintaining a healthy weight, balanced diet, and regular exercise, can help regulate hormones and promote ovulation. Additionally, medications like clomiphene citrate or letrozole may be prescribed to induce ovulation. In some cases, assisted reproductive technologies such as in vitro fertilization (IVF) may be necessary to achieve pregnancy. Close collaboration between healthcare providers and individuals with PCOS is essential to address fertility concerns and optimize the chances of successful conception."
      },

]

const Detail = () => {
    const { id } = useParams();
    const details = subDetails.find((item) => item.id === Number(id));
  return (
    
   <div className="py-20">
        
          {details && (
        <div className="w-full ">
          <img className="rounded-lg w-full h-[35vh]" src={details.coverImg} alt={details.title} />
          <div className="p-5">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{details.title}</h2>
            <p className='text-sm font-medium text-gray-900'>{details.desc}</p>
          </div>
        </div>
      )}

        </div>
    
        
  )
}

export default Detail