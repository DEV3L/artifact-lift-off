"use client";

import { useState } from "react";
import {
  Header,
  ReachCallToAction,
  Task,
  TaskForm,
  TaskList,
} from "./Components";
import { HeroBanner } from "./HeroBanner";

const defaultTasks = [
  { id: "1", text: "Contact Artifact L!ft Off", completed: false },
  { id: "2", text: "Prepare for the Cosmic Council Meeting", completed: false },
];

export const Content = () => {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const trimmedTask = newTask.trim();

    if (!trimmedTask) return;

    const newTaskObj: Task = {
      id: Date.now().toString(),
      text: trimmedTask,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTaskObj]);
    setNewTask("");
  };

  const removeTask = (taskId: string): void => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId: string): void => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && newTask.trim()) {
      addTask(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <main className="max-w-2xl mx-auto space-y-6">
        <Header />
        <HeroBanner title="Simplify, Organize, Elevate" />
        <TaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
          handleKeyPress={handleKeyPress}
        />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          toggleComplete={toggleComplete}
          removeTask={removeTask}
        />
        <ReachCallToAction />
      </main>
    </div>
  );
};
