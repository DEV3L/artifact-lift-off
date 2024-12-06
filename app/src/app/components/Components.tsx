"use client";

import { AnimatePresence, motion, Reorder } from "framer-motion";
import { GripVertical, Rocket, Trash2 } from "lucide-react";

export type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export const Header = () => (
  <motion.header
    className="text-center mb-12 mt-8"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="text-4xl font-bold mb-2">AiDo</h1>
    <p className="text-secondary">Simplify, Organize, Elevate</p>
  </motion.header>
);

export const TaskForm = ({
  newTask,
  setNewTask,
  addTask,
  handleKeyPress,
}: {
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  addTask: (e: React.FormEvent<HTMLFormElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => (
  <form onSubmit={addTask} className="mb-8">
    <div className="flex gap-2">
      <motion.input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 rounded-lg bg-input border border-input-border focus:border-focus focus:outline-none transition-colors"
        whileFocus={{ scale: 1.01 }}
      />
      <motion.button
        type="submit"
        disabled={!newTask.trim()}
        className={`px-6 py-2 rounded-lg font-medium transition-colors ${
          newTask.trim()
            ? "bg-primary hover:bg-primary-hover"
            : "bg-disabled cursor-not-allowed opacity-50"
        }`}
        whileHover={newTask.trim() ? { scale: 1.05 } : {}}
        whileTap={newTask.trim() ? { scale: 0.95 } : {}}
      >
        Add
      </motion.button>
    </div>
  </form>
);

export const TaskList = ({
  tasks,
  setTasks,
  toggleComplete,
  removeTask,
}: {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  toggleComplete: (taskId: string) => void;
  removeTask: (taskId: string) => void;
}) => (
  <Reorder.Group
    axis="y"
    values={tasks}
    onReorder={setTasks}
    className="space-y-3"
  >
    <AnimatePresence>
      {tasks.map((task) => (
        <Reorder.Item
          key={task.id}
          value={task}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="group"
        >
          <motion.div
            className={`bg-item rounded-lg p-4 flex items-center gap-3 border border-item-border ${
              task.completed ? "opacity-60" : ""
            }`}
            whileHover={{ scale: 1.02 }}
            layout
          >
            <button
              onClick={() => toggleComplete(task.id)}
              className={`w-5 h-5 rounded border ${
                task.completed ? "bg-primary border-primary" : "border-default"
              }`}
            />

            <span
              className={`flex-1 text-lg ${
                task.completed ? "line-through text-muted" : ""
              }`}
            >
              {task.text}
            </span>

            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <GripVertical className="text-icon cursor-grab" />
              <motion.button
                onClick={() => removeTask(task.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-danger hover:text-danger-hover transition-colors"
              >
                <Trash2 size={18} />
              </motion.button>
            </div>
          </motion.div>
        </Reorder.Item>
      ))}
    </AnimatePresence>
  </Reorder.Group>
);

export const Footer = () => (
  <motion.footer
    className="text-center mt-12 text-muted"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    <div className="flex items-center justify-center gap-2">
      <Rocket size={16} />
      <p>Reach for the stars</p>
    </div>
  </motion.footer>
);