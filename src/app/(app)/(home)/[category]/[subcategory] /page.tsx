

interface Props {
    params: Promise<{
        category: string;
        subcategory: string;
    }> 
}

const Page = async ({ params }: Props) => {
    const {category, subcategory} =  await params;
    console.log("la categoria es: " + category)
    console.log("la subcategoria es: " + subcategory)
    return (
        <div>
            Category: {category} <br/> 
            Subcategory: {subcategory}
        </div>
    );
};

export default Page;