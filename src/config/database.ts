import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://biblioteca_khj5_user:Cn1dilgimfr0unyCcNRhthxoYPJFigi7@dpg-ct5pv5alqhvc73aa9t5g-a.oregon-postgres.render.com/biblioteca_khj5";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
//aaa