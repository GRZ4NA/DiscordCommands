import { Bot, InitOptions } from "./src/structures/Bot.js";
import {
    ObjectID,
    TargetID,
    Parameter,
    InputParameter,
    ParameterResolvable,
    ParameterType,
    ParameterSchema,
    ObjectIdType,
    TargetType,
    InputParameterValue,
    ObjectIdReturnType,
    TargetIdReturnType,
} from "./src/structures/Parameter.js";
import { PermissionsError, ParameterTypeError, MissingParameterError, OperationSuccess } from "./src/errors.js";
import {
    ChildCommandType,
    Commands,
    ChildCommands,
    CommandInit,
    ChildCommandInit,
    CommandType,
    CommandFunction,
    ContextType,
    ChildCommandResolvable,
    BaseCommands,
    CommandFunctionReturnTypes,
    BaseCommandType,
    EphemeralType,
} from "./src/commands/commandsTypes.js";
import {
    APICommandObject,
    APICommandType,
    ChatCommandObject,
    ChatCommandOptionObject,
    ChatCommandOptionType,
    CommandPermission,
    CommandPermissionType,
    ContextMenuCommandObject,
    RegisteredCommandObject,
    SubCommandGroupObject,
    TextCommandOptionChoiceObject,
} from "./src/structures/apiTypes.js";
import { InputManager } from "./src/structures/InputManager.js";
import { SubCommand, SubCommandInit } from "./src/commands/SubCommand.js";
import { SubCommandGroup, SubCommandGroupInit } from "./src/commands/SubCommandGroup.js";
import { ChatCommand, ChatCommandInit } from "./src/commands/ChatCommand.js";
import { ContextMenuCommand, ContextMenuCommandInit } from "./src/commands/ContextMenuCommand.js";
import { FunctionCommand, FunctionCommandInit } from "./src/commands/base/FunctionCommand.js";
import { APICommandInit, Command } from "./src/commands/base/Command.js";
import { CommandManager } from "./src/structures/CommandManager.js";
import { SystemMessageManager, MessageType, SystemMessageAppearance, SystemMessageData } from "./src/structures/SystemMessage.js";
import { CommandPermissions, CommandPermissionsInit, PermissionCheckTypes, PermissionFunction } from "./src/structures/CommandPermissions.js";
import { HelpMessage, HelpMessageParams } from "./src/commands/Help.js";
import { PrefixManager, ScopeResolvable } from "./src/structures/PrefixManager.js";
import { GuildCommand, GuildCommandInit } from "./src/commands/base/GuildCommand.js";
import { PermissionCommand, PermissionCommandInit } from "./src/commands/base/PermissionCommand.js";
import { PermissionGuildCommand, PermissionGuildCommandInit } from "./src/commands/base/PermissionGuildCommand.js";

export {
    Bot,
    InitOptions,
    ChatCommandInit,
    ContextMenuCommandInit,
    SubCommandGroupInit,
    SubCommandInit,
    CommandPermissionsInit,
    InputManager,
    HelpMessageParams,
    ParameterResolvable,
    ParameterType,
    ObjectID,
    TargetID,
    SystemMessageAppearance,
    SystemMessageData,
    ParameterSchema,
    Parameter,
    PermissionsError,
    ParameterTypeError,
    MissingParameterError,
    OperationSuccess,
    APICommandType,
    CommandType,
    ChildCommandType,
    Commands,
    ChildCommands,
    CommandInit,
    ChildCommandInit,
    SubCommand,
    SubCommandGroup,
    ChatCommand,
    ContextMenuCommand,
    ObjectIdType,
    InputParameter,
    FunctionCommand,
    Command,
    TargetType,
    CommandManager,
    CommandFunction,
    PermissionCheckTypes,
    PermissionFunction,
    ContextType,
    InputParameterValue,
    ObjectIdReturnType,
    TargetIdReturnType,
    SystemMessageManager,
    ChildCommandResolvable,
    CommandPermissions,
    RegisteredCommandObject,
    HelpMessage,
    PrefixManager,
    BaseCommands,
    ChatCommandObject,
    APICommandObject,
    ContextMenuCommandObject,
    SubCommandGroupObject,
    CommandFunctionReturnTypes,
    BaseCommandType,
    APICommandInit,
    CommandPermission,
    FunctionCommandInit,
    MessageType,
    GuildCommand,
    PermissionCommand,
    PermissionGuildCommand,
    ChatCommandOptionObject,
    CommandPermissionType,
    ScopeResolvable,
    TextCommandOptionChoiceObject,
    ChatCommandOptionType,
    GuildCommandInit,
    PermissionCommandInit,
    PermissionGuildCommandInit,
    EphemeralType,
};
