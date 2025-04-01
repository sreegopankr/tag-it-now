
import DetailPage from "./DetailPage"

const getURLDetails = async () => {
  try {
    const response = await fetch('/data/cardData.json'); //replace with metadata fetching api
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export async function generateMetadata({ params }) {

  // let data = getURLDetails();
  // const currentURL = data.filter(url => url.id === params.id);
  // console.log(currentURL);
  
  const { id } = await params
  console.log('Params '+ id)

  return {
    title: `Title for id ${id}`,
    description: `Description for id ${id}`,
    openGraph: {
      title: `Open graph ${id}`,
      description: `Open graph ${id}`,
      images: [
        {
          url: `https://images.unsplash.com/photo-1741851373559-6879db14fd8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D`,
          width: 800,
          height: 600,
        },
      ],
    },
  }
}

const page = () => {

  return (
    <div>
      <DetailPage />
    </div>
  )
}

export default page