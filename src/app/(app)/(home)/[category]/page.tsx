
interface Props {
    params: Promise<{
        category: string;
        
    }>
}

const Page = async ({ params }: Props) => {
    const { category } = await params;
    console.log("The category is " + category)

    return (
        <div>
            Category: {category}     
        </div>
    )
}

export default Page;