"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const response = await database.insert({ name: 'Far Cry V', price: 120.00, category: 'ação' }).table('games');
        // res.json(response);
        res.send('estou aqui!');
    }
    catch (error) {
        console.log(error);
    }
}));
app.get('/games', (req, res) => {
    res.json({ games: ['lol', 'dota', 'gta', 'guitar hero', 'rdr'] });
});
// app.post('/teste', (req, res) => {
//     console.log(JSON.stringify(req.body));
//     res.redirect('/')
// })
const port = 8080;
app.listen(port, () => console.log(`Servidor iniciado em http://localhost:${port}`));
