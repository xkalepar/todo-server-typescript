"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodos = exports.updateTodos = exports.getTodos = exports.createTodos = void 0;
const todos_1 = require("../models/todos");
const TODOS = [];
const createTodos = (req, res, next) => {
    const text = req.body.text;
    const id = Math.random().toString();
    const newTodo = new todos_1.Todo(id, text);
    TODOS.push(newTodo);
    res
        .status(201)
        .json({ massage: "Todo created successfully", createdTodo: newTodo });
};
exports.createTodos = createTodos;
const getTodos = (req, res, next) => {
    res.status(200).json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodos = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex((x) => x.id === todoId);
    if (todoIndex < 0) {
        res.status(404).json({ massage: "Could not find todo!" });
    }
    TODOS[todoIndex] = new todos_1.Todo(TODOS[todoIndex].id, updatedText);
    res.status(201).json({
        message: "Todo updated successfully",
        updateTodo: TODOS[todoIndex],
    });
};
exports.updateTodos = updateTodos;
const deleteTodos = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((x) => x.id === todoId);
    if (todoIndex < 0) {
        res.status(404).json({ massage: "Could not find todo!" });
    }
    console.log(TODOS[todoIndex].text, typeof TODOS[todoIndex].id);
    const deletedTodo = { id: TODOS[todoIndex].id, text: TODOS[todoIndex].text };
    // splice just deleted 1 index from todoIndex point
    TODOS.splice(todoIndex, 1);
    res.status(201).json({
        message: `${deletedTodo.id}: ${deletedTodo.text} deleted successfully`,
    });
};
exports.deleteTodos = deleteTodos;
