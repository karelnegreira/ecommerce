

interface SearchFilterProps {
    data: any
}

export const SearchFilters = ({ data }: SearchFilterProps) => {
  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      {JSON.stringify(data, null , 2)} 
    </div>
  );
};

