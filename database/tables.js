import { DataTypes } from "sequelize";
import mysql from "./mysql.js";

const Jogos = mysql.define('Jogos', {
    id_jogo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: DataTypes.STRING,
    desenvolvedor: DataTypes.STRING,
    data_de_lancamento: DataTypes.DATEONLY,
    descricao: DataTypes.STRING
});

const Usuarios = mysql.define('Usuarios', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    data_de_nascimento: DataTypes.DATEONLY,
    senha: DataTypes.STRING,
});

const Funcionario  = mysql.define('Funcionario', {
    id_funcionario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: DataTypes.STRING,
    cargo: DataTypes.STRING,
    nascimento: DataTypes.DATEONLY
});

const Cliente = mysql.define('Cliente', {
    id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    data_de_nascimento: DataTypes.DATEONLY,
    telefone: DataTypes.STRING,
    endereco: DataTypes.STRING
});

const Pedido = mysql.define('Pedido', {
    id_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data_pedido: DataTypes.DATE,
    status: DataTypes.STRING, 
    valor_total: DataTypes.FLOAT,
});

const ItemPedido = mysql.define('ItemPedido', {
    quantidade: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
    preco_unitario: DataTypes.FLOAT
});

Cliente.hasMany(Pedido, { foreignKey: 'clienteId' }); 
Pedido.belongsTo(Cliente, { foreignKey: 'clienteId' });

Pedido.belongsToMany(Jogos, { through: ItemPedido, onDelete: 'CASCADE' });
Jogos.belongsToMany(Pedido, { through: ItemPedido, onDelete: 'CASCADE' });


await mysql.sync();


export { Jogos, Usuarios, Funcionario, Cliente, Pedido, ItemPedido, mysql};
