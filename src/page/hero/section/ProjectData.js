import img1 from "../../../assets/building1.jpg";
import img4 from "../../../assets/kalamassery.jpg";
import kalamassery from "../../../assets/kalamassery.pdf";

import image1 from "../../../assets/projects/cheek1.jpg";
import image2 from "../../../assets/projects/cheek2.jpg";
import image3 from "../../../assets/projects/cheek3.jpg";
import image4 from "../../../assets/projects/pattambi1.jpg";
import image5 from "../../../assets/projects/kondotty1.jpg";
import image6 from "../../../assets/projects/kalamassery2.jpg";
import image7 from "../../../assets/projects/kalamassery3.jpg";
import image8 from "../../../assets/projects/kalamassery4.jpg";
import image9 from "../../../assets/projects/kalamassery5.jpg";
import image10 from "../../../assets/projects/kalamassery6.jpg";
import image11 from "../../../assets/projects/kalamassery7.jpg";
import image14 from "../../../assets/projects/kalamassery10.jpg";
import image15 from "../../../assets/projects/kalamassery11.jpg";
import image16 from "../../../assets/projects/kalamassery12.jpg";
import image17 from "../../../assets/projects/kalamassery13.jpg";
import image18 from "../../../assets/projects/kalamassery14.jpg";
import image19 from "../../../assets/projects/kalamassery15.jpg";
import image20 from "../../../assets/projects/kalamassery16.jpg";
import image21 from "../../../assets/projects/kalamassery17.jpg";
import image22 from "../../../assets/projects/kalamassery18.jpg";
import image23 from "../../../assets/projects/kalamassery19.jpg";
import image24 from "../../../assets/projects/kalamassery20.jpg";

const projectData = [
  {
    id: "cheekkilode",
    title: "Cheekkilode",
    location: "Cheekkilode, Kozhikode",
    area: "3060 sq.ft",
    image: img1,
    images: [image1, image2, image3],
    pdfLink: "/pdfs/cheekkilode.pdf",
    summary:
      "A contemporary residential complex in the heart of Cheekkilode, offering modern amenities and spacious living areas. Perfect for families seeking a comfortable lifestyle in a well-connected neighborhood.",
    description: `Located in the serene neighborhood of Cheekkilode, this residential complex offers a perfect blend of modern living and traditional charm. The property features spacious apartments with well-planned layouts, ensuring maximum comfort and functionality.

Each unit is designed with attention to detail, featuring high-quality finishes, modern fixtures, and ample natural lighting. The complex includes dedicated parking spaces, 24/7 security, and well-maintained common areas.

Residents can enjoy the convenience of nearby schools, hospitals, and shopping centers, while still maintaining a peaceful living environment. The property's strategic location provides easy access to major roads and public transportation, making daily commutes hassle-free.`,
  },
  {
    id: "pattambi-heights",
    title: "Pattambi",
    location: "Pattambi, Malappuram",
    area: "2500 sq.ft",
    images: [image4],
    pdfLink: null,
    summary:
      "A spacious commercial property in Pattambi's prime location, ideal for businesses and retail establishments. Strategic location with excellent connectivity and modern infrastructure.",
    description: `This commercial property in Pattambi offers an excellent opportunity for businesses looking to establish their presence in this growing area. The property features a modern design with flexible spaces that can be customized according to business needs.

The building is equipped with essential amenities including power backup, water supply, and high-speed internet connectivity. Its strategic location ensures high visibility and easy accessibility for customers and clients.

The property is well-connected to major roads and public transportation, making it convenient for both employees and visitors. The surrounding area includes various retail establishments, restaurants, and other commercial spaces, creating a vibrant business environment.`,
  },
  {
    id: "kondotty",
    title: "Kondotty",
    location: "Kondotty, Malappuram",
    area: "2500  sq.ft",
    images: [image5],
    pdfLink: null,
    summary:
      "A prime commercial space in Kondotty's business district, offering modern facilities and excellent connectivity. Perfect for retail, offices, or mixed-use development.",
    description: `Situated in Kondotty's bustling commercial area, this property offers an ideal location for businesses looking to expand their operations. The building features contemporary architecture with practical design elements that cater to various business needs.

The property includes modern amenities such as dedicated parking, security systems, and backup power supply. Its spacious layout allows for flexible usage, whether for retail, office space, or mixed-use purposes.

The location provides excellent connectivity to nearby towns and cities, making it a strategic choice for businesses targeting the wider Malappuram region. The area is well-developed with essential infrastructure and is surrounded by residential neighborhoods, ensuring a steady flow of potential customers.`,
  },
  {
    id: "kalamassery",
    title: "Residence at Kalamassery",
    location: "Kalamassery, Ernakulam",
    area: "4500 sq.ft",
    images: [
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image14,
      image15,
      image16,
      image17,
      image18,
      image19,
      image20,
      image21,
      image22,
      image23,
      image24,
    ],
    pdfLink: kalamassery,
    summary:
      "A premium residential property in Kalamassery, offering modern living spaces with excellent connectivity to Kochi city. Perfect for families seeking a balanced urban lifestyle.",
    description: `This residential property in Kalamassery offers a perfect blend of comfort and convenience, situated in one of Ernakulam's most sought-after locations. The property features well-designed living spaces with modern amenities and high-quality finishes.

Residents can enjoy the benefits of a peaceful neighborhood while having easy access to Kochi city's major attractions and business districts. The property includes essential amenities such as 24/7 security, dedicated parking, and well-maintained common areas.

The location provides excellent connectivity to schools, hospitals, shopping centers, and public transportation. Its proximity to major roads and highways makes commuting to different parts of Kochi convenient. The property is ideal for families looking for a comfortable living space in a well-established neighborhood.`,
  },
];

export default projectData;
