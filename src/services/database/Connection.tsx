import * as SQLite from 'expo-sqlite';
const Connection = SQLite.openDatabase('hubusca.db');
export default Connection;