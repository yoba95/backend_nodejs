import express from "express";
import morgan from "morgan";
import cors from "cors";
//importat las cookies-parser

const app = express();

app.use(express.json());
app.use(morgan('dev'));





export default app;