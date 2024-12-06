"use client";

import { Box, Button, IconButton, InputBase, Typography } from "@mui/material";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import { GripVertical, Rocket, Trash2 } from "lucide-react";

export type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Typography
      variant="h1"
      align="center"
      sx={{
        mb: 2,
        mt: 8,
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "primary.main",
      }}
    >
      AiDo
    </Typography>
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
  <Box
    component="form"
    onSubmit={addTask}
    sx={{ display: "flex", alignItems: "center", mb: 8 }}
  >
    <InputBase
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Add a new task..."
      sx={{
        flex: 1,
        p: 1,
        bgcolor: "background.paper",
        color: "text.primary",
        borderRadius: 1,
      }}
    />
    <Button
      type="submit"
      disabled={!newTask.trim()}
      variant="contained"
      color="primary"
      sx={{
        ml: 2,
        bgcolor: "primary.main",
        color: "secondary.main", // Dark text color
        "&:hover": { bgcolor: "primary.dark" },
      }}
    >
      Add
    </Button>
  </Box>
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
  <Reorder.Group axis="y" values={tasks} onReorder={setTasks}>
    <AnimatePresence>
      {tasks.map((task) => (
        <Reorder.Item
          key={task.id}
          value={task}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 1,
              p: 2,
              display: "flex",
              alignItems: "center",
              border: 1,
              borderColor: "divider",
              opacity: task.completed ? 0.6 : 1,
            }}
          >
            <IconButton onClick={() => toggleComplete(task.id)} sx={{ mr: 2 }}>
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  bgcolor: task.completed ? "primary.main" : "grey.500",
                  border: 1,
                  borderColor: task.completed ? "primary.main" : "grey.500",
                }}
              />
            </IconButton>

            <Typography
              sx={{
                flex: 1,
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "grey.500" : "text.primary",
              }}
            >
              {task.text}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <GripVertical className="text-gray-400 cursor-grab" />
              <IconButton onClick={() => removeTask(task.id)} color="error">
                <Trash2 size={18} />
              </IconButton>
            </Box>
          </Box>
        </Reorder.Item>
      ))}
    </AnimatePresence>
  </Reorder.Group>
);

export const ReachCallToAction = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    <Box sx={{ textAlign: "center", mt: 12, color: "text.secondary" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Rocket size={16} />
        <Typography>Reach for the stars</Typography>
      </Box>
    </Box>
  </motion.footer>
);
