import javax.swing.*;
import java.awt.*;
import java.awt.event.*;


public class ToDoList {

    public static void main(String[] args) {

        // app window creation
        JFrame frame = new JFrame("To-Do List");
        // frame.setLayout()


        JTextField textBox = new JTextField("Enter new task");
        textBox.setForeground(Color.gray);

        textBox.addFocusListener(new FocusListener() {

            @Override
            public void focusGained(FocusEvent e) {
                if (textBox.getText().equals("Enter new task")) {
                    textBox.setText("");
                    textBox.setForeground(Color.black);
                }
            }

            @Override
            public void focusLost(FocusEvent e) {
                if (textBox.getText().isEmpty()) {
                    textBox.setForeground(Color.gray);
                    textBox.setText("Enter new task");
                }
            }
        });
        

        frame.add(textBox);



        // makes the frame visible
        frame.setVisible(true);
    }
}