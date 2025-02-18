import { useSQLiteContext } from "expo-sqlite";
export function useAcidentesDatabase(): any{
    const database = useSQLiteContext();

    async function create(data:any){
        const statement = await database.prepareAsync(
            "INSERT INTO acidentes VALUES ($id, $data, $createdAt)"
        )
        try {
            const result = await statement.executeAsync({
                $data: JSON.stringify(data),
                $createdAt: Date.now()
            })
            console.log(result)
            const resultId = result.lastInsertRowId.toLocaleString()
            return { resultId }
        } catch (error) {
            throw error
        } finally {
            await statement.finalizeAsync()
        }
    }
    async function update(data: any, id: number) {
        const statement = await database.prepareAsync(
          "UPDATE acidentes SET data = $data WHERE id = $id"
        )
    
        try {
          await statement.executeAsync({
            $id: id,
            $data: data,
          })
        } catch (error) {
          throw error
        } finally {
          await statement.finalizeAsync()
        }
    }
    async function get(id: number) {
        try {
          const query = "SELECT * FROM acidentes WHERE id = ?"
    
          const response:any = await database.getFirstAsync(query, [
            id,
          ])
          const parse = await JSON.parse(response?.data)
              
          return parse
        } catch (error) {
          throw error
        }
    }
    async function getList(){
        try {
            const query = "SELECT id, json_extract(data, '$.trabalhador.nome') AS nome, createdAt FROM acidentes ORDER BY createdAt DESC"
            const response: any = await database.getAllAsync(query)
            
            return response
        } catch (error) {
            throw error
        }
    }
    
    async function remove(id: number) {
        try {
          await database.execAsync("DELETE FROM acidentes WHERE id = " + id)
        } catch (error) {
          throw error
        }
      }

    return { create, update, get, getList, remove }
}
