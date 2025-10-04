

interface SearchFilterProps {
    data: any
}

export const SearchFilters = ({ data }: SearchFilterProps) => {
  return (
    <div>
      {JSON.stringify(data, null , 2)} 
    </div>
  );
};

