import { Bot, InitOptions } from "./src/structures/Bot";
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
} from "./src/structures/Parameter";
import { PermissionsError, ParameterTypeError, MissingParameterError, OperationSuccess } from "./src/errors";
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
} from "./src/commands/types/commands";
import { CommandPermissionsInit, PermissionCheckTypes, PermissionFunction } from "./src/commands/types/permissions";
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
} from "./src/structures/apiTypes";
import { InputManager } from "./src/structures/InputManager";
import { SubCommand, SubCommandInit } from "./src/commands/SubCommand";
import { SubCommandGroup, SubCommandGroupInit } from "./src/commands/SubCommandGroup";
import { ChatCommand, ChatCommandInit } from "./src/commands/ChatCommand";
import { ContextMenuCommand, ContextMenuCommandInit } from "./src/commands/ContextMenuCommand";
import { FunctionCommand, FunctionCommandInit } from "./src/commands/base/FunctionCommand";
import { APICommandInit, Command } from "./src/commands/base/Command";
import { CommandManager } from "./src/structures/CommandManager";
import { SystemMessageManager, MessageType, SystemMessageAppearance, SystemMessageData } from "./src/structures/SystemMessage";
import { CommandPermissions } from "./src/structures/CommandPermissions";
import { HelpMessage, HelpMessageParams } from "./src/commands/Help";
import { PrefixManager, ScopeResolvable } from "./src/structures/PrefixManager";
import { GuildCommand, GuildCommandInit } from "./src/commands/base/GuildCommand";
import { PermissionCommand, PermissionCommandInit } from "./src/commands/base/PermissionCommand";
import { PermissionGuildCommand, PermissionGuildCommandInit } from "./src/commands/base/PermissionGuildCommand";

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
