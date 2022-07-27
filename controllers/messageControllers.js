import Message from "../models/Message.js";

/**
 * Task 8
 * Controller method to create a new Message
 * @param {*} req
 * @param {*} res
 * @returns
 */

export const createMessage = async (req, res) => {
  try {
    const newMessage = await Message.create({
      user_id: req.body.user_id,
      content: req.body.content,
      category: req.body.category      
    });
    return res
      .status(200)
      .json({ message: "Message was created", newMessage: newMessage });
  } catch (error) {
    return res.status(400).json({ message: "Error happened", error: error });
  }
};

/**
 * Task 9
 * Controller method to find a Message by Id
 * @param {*} req
 * @param {*} res
 */
export const getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params._id); 

    // if (message.deleted === true) {
    //   return res.status(400).json({ message: "Message not found" });
    // }       
    return res
    .status(200)
    .json({ foundMessage: "Message found", message: message });

  } catch (error) {
    return res.status(400).json({ message: "Error happened", error: error });
  }
};

/**
 * Task 10
 * Control method to edit message
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const updateMessage = async (req, res) => {
  try {
    const updatedMessage = await Message.findById(req.params.id)    

    if (!updatedMessage) {
      return res.status(400).json({ message: "Message not found" });      
    }
    if (req.body.user_id !== updatedMessage.user_id.toString()) {
      return res.status(400).json({ message: "User Id do not match" });
    }
    const editedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      {
        content: req.body.content,  
        ['dates.last_edited']:Date.now()      
      },
      { new: true, runValidations: true }
    );    
    
    return res.status(200).json({message: 'The message was updated', edited: editedMessage});
  } catch (error) {
    return res.status(400).json({ message: "Error happened", error: error.message });
  }
};

/**
 * Task 11
 * Method to delete message
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id)    

    if (!message) {
      return res.status(400).json({ message: "Message not found" });      
    }
    if (req.body.user_id !== message.user_id.toString()) {
      return res.status(400).json({ message: "User Id do not match" });
    }
    await Message.findByIdAndUpdate(
      req.params.id,
      {
        deleted: true,  
        ['dates.last_edited']:Date.now()      
      },
      { new: true, runValidations: true }
    );    
    
    return res.status(200).json('This message was deleted');
  } catch (error) {
    return res.status(400).json({ message: "Error happened", error: error.message });
  }
  };
  /**
   * View all messages
   * @param {*} req 
   * @param {*} res 
   * @returns 
   */
  export const viewAllMessages = async (req, res) => {
    try {
      const messages = await Message.find({deleted: false}).sort({dates: -1}).limit(20);
      
      return res.status(200).json({ messages: messages});

    } catch (error) {
      return res.status(400).json({ message: "Error happened", error: error });
    }
  };

  export const viewMessagesByUserId = async (req, res) => {
    try {
      const messages = await Message.find({deleted: false, user_id: req.user._id}).sort({dates: -1}).limit(20);
      
      return res.status(200).json({ messages: messages});

    } catch (error) {
      return res.status(400).json({ message: "Error happened", error: error });
    }
  };

  /**
   * Task 12b
   * Method to view messages by category
   * @param {*} req 
   * @param {*} res 
   * @returns 
   */
  export const viewMessageByCategory = async (req, res) => {
    try {
      const viewMessage = await Message.find(
        { category: req.params.category, deleted: false }
       
      ).populate('user_id').sort({date: 1}).limit(3);
      if (!viewMessage) {
        return res.status(400).json({ message: "Message not found" });
      }
      
      return res.status(200).json({message: `These are Messages in the ${req.params.category} category`, messages: viewMessage});

    } catch (error) {
      return res.status(400).json({ message: "Error happened in category method", error: error.message });
    }
  };

  export default {
    createMessage,
    getMessageById,
    updateMessage,
    deleteMessage,
    viewAllMessages,
    viewMessagesByUserId,
    viewMessageByCategory
  }



