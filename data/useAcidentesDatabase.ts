import { useSQLiteContext } from "expo-sqlite";
export function useAcidentesDatabase(): any{
    const database = useSQLiteContext();

    async function create(data:any){
        const statement = await database.prepareAsync(
            "INSERT INTO acidentes VALUES ($id, $data)"
        )
        try {
            const result = await statement.executeAsync({
                $data: JSON.stringify(data)
            })
            console.log(result)
            const resultId = result.lastInsertRowId.toLocaleString()
            return { resultId }
        } catch (error) {
            throw error
        }
    }

    return { create }
}
