export const SetNewMessageToQuery = (
  queryClient: any,
  key: any,
  message: any
) => {
  console.log({ queryClient, key, message });
  const previousMessages = queryClient.getQueryData(key);

  if (previousMessages) {
    queryClient.setQueryData(key, (oldData: any) => {
      oldData.pages.splice(0, 1, {
        messages: [message, ...oldData.pages[0].messages],
        totalPages: oldData.pages[0].totalPages,
        nextPage: oldData.pages[0].nextPage,
      });
      return {
        pages: oldData.pages,
        pageParams: oldData.pageParams,
      };
    });
  }
};

export const SetConverstionToQuery = (
  queryClient: any,
  key: any,
  conversation: any
) => {
  console.log({ queryClient, key, conversation });
  const previousConversations = queryClient.getQueryData(key);

  if (previousConversations) {
    queryClient.setQueryData(key, (oldData: any) => {
      oldData.pages.splice(0, 1, {
        conversations: [
          conversation,
          ...oldData.pages[0].conversations.filter(
            (c: any) => c._id !== conversation._id
          ),
        ],
        totalPages: oldData.pages[0].totalPages,
        nextPage: oldData.pages[0].nextPage,
      });
      return {
        pages: oldData.pages,
        pageParams: oldData.pageParams,
      };
    });
  }
};
